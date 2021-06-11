import { extendTheme } from '@chakra-ui/react'

const myChanges = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ myChanges })

export default theme;