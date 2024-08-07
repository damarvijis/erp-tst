import ContactForm from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
}

export default meta

type Story = StoryObj<typeof ContactForm>

export const Default: Story = {
  args: {},
}
