import { Text } from "@chakra-ui/react"

interface HiglightTextProps {
  children: React.ReactNode
}

const HiglightText = ({ children }: HiglightTextProps) => (
  <Text as={"span"} bgGradient="linear(to-r, blue.300, purple.300)" bgClip="text" fontWeight="bold">
    {children}
  </Text>
)

export default HiglightText
