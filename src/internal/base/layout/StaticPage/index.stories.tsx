import { Box } from "@chakra-ui/react"
import StaticPage from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof StaticPage> = {
  component: StaticPage,
}

export default meta

type Story = StoryObj<typeof StaticPage>

export const Default: Story = {
  args: {
    children: <Box mt={200}>Max Content 1200px</Box>,
  },
}
