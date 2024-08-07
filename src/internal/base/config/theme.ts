import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: "blue.400",
      secondary: "purple.400",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  components: {
    Button: {
      variants: {
        solid: {
          bgGradient: "linear(to-r, blue.300, purple.300)",
          _hover: {
            bgGradient: "linear(to-r, blue.400, purple.400)",
          },
        },
        outline: {
          border: "2px solid",
          borderColor: "primary",
          color: "primary",
          _hover: {
            bgGradient: "linear(to-r, blue.400, purple.400)",
            color: "black",
          },
        },
      },
    },
  },
})

export default theme
