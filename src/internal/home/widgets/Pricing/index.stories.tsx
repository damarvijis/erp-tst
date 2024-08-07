import Pricing from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Pricing> = {
  component: Pricing,
}

export default meta

type Story = StoryObj<typeof Pricing>

export const Default: Story = {
  args: {},
}
