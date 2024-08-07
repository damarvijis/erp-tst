import LoginForm from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Default: Story = {
  args: {},
}
