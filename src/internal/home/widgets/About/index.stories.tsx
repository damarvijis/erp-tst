import About from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof About> = {
  component: About,
}

export default meta

type Story = StoryObj<typeof About>

export const Default: Story = {
  args: {},
}
