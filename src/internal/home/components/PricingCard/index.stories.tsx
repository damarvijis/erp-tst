import PricingCard from "."
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof PricingCard> = {
  component: PricingCard,
}

export default meta

type Story = StoryObj<typeof PricingCard>

export const Default: Story = {
  args: {
    features: ["Test Feature 1", "Test Feature 2", "Test Feature 3"],
    price: 120,
    title: "test title",
  },
}
