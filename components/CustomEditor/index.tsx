import React, { ReactElement, useMemo, useRef, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Button } from "@chakra-ui/button";

import Editor from "@draft-js-plugins/editor";
import createInlineToolbarPlugin, { Separator } from "@draft-js-plugins/inline-toolbar";
import createSideToolbarPlugin from "@draft-js-plugins/side-toolbar";
import createImagePlugin from "@draft-js-plugins/image";
import createVideoPlugin from "@draft-js-plugins/video";
import buttonStyles from './buttonStyles.module.css';
import toolbarStyles from './toolbarStyles.module.css';
import editorStyles from "./editorStyles.module.css";
import blockTypeSelectStyles from './blockTypeSelectStyles.module.css'
import "./../../node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css";
import "./../../node_modules/@draft-js-plugins/side-toolbar/lib/plugin.css";
import "./../../node_modules/@draft-js-plugins/image/lib/plugin.css";
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
  } from '@draft-js-plugins/buttons';
const inlineToolbarPlugin = createInlineToolbarPlugin({
    theme:{
        buttonStyles,toolbarStyles
    }
});
const sideToolbarPlugin = createSideToolbarPlugin({
    theme:{
        buttonStyles,toolbarStyles,blockTypeSelectStyles
    }
});
const imagePlugin = createImagePlugin();
const videoPlugin = createVideoPlugin();

const CustomEditor = (): ReactElement => {
  const [plugins, InlineToolbar, SideToolbar, addImage, addVideo] =
    useMemo(() => {
      return [
        [inlineToolbarPlugin, sideToolbarPlugin, imagePlugin, videoPlugin],
        inlineToolbarPlugin.InlineToolbar,
        sideToolbarPlugin.SideToolbar,
        imagePlugin.addImage,
        videoPlugin.addVideo,
      ];
    }, []);

  const emptyContentState = convertFromRaw({
    entityMap: {},
    blocks: [
      {
        text: "",
        key: "foo",
        type: "unstyled",
        entityRanges: [],
      },
    ],
  });

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(emptyContentState)
  );

  const editor = useRef<Editor | null>(null);

  const onChange = (value: EditorState): void => {
    const contentState = editorState.getCurrentContent();
    console.log("content state", convertToRaw(contentState));
    setEditorState(value);
  };

  const insertImage = (base64) => {
    console.log(editorState);
    const newState = onChange(addImage(editorState, base64, {}));
    console.log(newState);
  };

  const InsertVideo = () => {
    console.log(editorState);
    const newState = onChange(
      addVideo(editorState, {
        src: "https://www.youtube.com/watch?v=t6KTxtK_l0s",
      })
    );
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const showImage = (e) => {
    getBase64(e.target.files[0]).then((data) => insertImage(data));
  };

  return (
    <div className={editorStyles.editor}>
      <Editor
        editorKey="SimpleInlineToolbarEditor"
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={(element) => {
          editor.current = element;
        }}
      />
       <InlineToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <HeadlineOneButton {...externalProps} />
                <HeadlineTwoButton {...externalProps} />
                <UnorderedListButton {...externalProps} />
                <OrderedListButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
                <CodeBlockButton {...externalProps} />
              </>
            )
          }
        </InlineToolbar>
        <SideToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <>
                <BlockquoteButton {...externalProps} />
                <CodeBlockButton {...externalProps} />
              </>
            )
          }
        </SideToolbar>
      <input type="file" id="insertImageInput" onInput={showImage} />
      <Button type="submit" onClick={() => InsertVideo()}>
        video
      </Button>
    </div>
  );
};

export default CustomEditor;
