import HiglightText from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof HiglightText> = {
  component: HiglightText,
}

export default meta

type Story = StoryObj<typeof HiglightText>

export const Default: Story = {
  args: {
    children: "Test Highlight Text",
  },
}
