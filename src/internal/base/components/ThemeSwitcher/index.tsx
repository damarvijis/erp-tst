import { IconButton, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const Icon = colorMode === "light" ? MoonIcon : SunIcon

  return (
    <IconButton aria-label="Toggle theme" p={4} size="md" variant="outline" icon={<Icon />} onClick={toggleColorMode} />
  )
}
