import AboutCard from "."
import type { Meta, StoryObj } from "@storybook/react"
import aboutImg from "../../../../assets/about-solution.svg"

const meta: Meta<typeof AboutCard> = {
  component: AboutCard,
}

export default meta

type Story = StoryObj<typeof AboutCard>

export const Even: Story = {
  args: {
    description: "Test Description",
    imageUrl: aboutImg,
    isEven: true,
    title: "test title",
  },
}

export const Odd: Story = {
  args: {
    description: "Test Description",
    imageUrl: aboutImg,
    isEven: false,
    title: "test title",
  },
}
