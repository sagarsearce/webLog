import React, { useRef, useEffect } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const RichTextEditor = props => {
    const editorRef = useRef<SunEditor>(null);
    useEffect(() => {
        // Get underlining core object here
        // Notice that useEffect is been used because you have to make sure the editor is rendered.
        // We are using the null aware feature in typescript

        console.log(editorRef.current?.editor.core);
    }, []);
    const change = (c)=>{
      console.log('hi...');
      
      console.log(c);
      
    }
    return (
        <div>
            <p> My Other Contents </p>
            <SunEditor ref={editorRef} onChange={(e)=>change(e)} />
        </div>
    );
};
export default RichTextEditor;