import { ButtonComponent, ButtonProps } from "@woovi-ui/react";
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: ButtonComponent,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Contained: StoryObj<ButtonProps> = {
  args: {
    options: {
      variant: "contained"
    }
  },
}
export const Outlined: StoryObj<ButtonProps> = {
  args: {
    options: {
      variant: "outlined"
    }
  },
}