import { themes } from '@storybook/theming'
import { muiTheme } from 'storybook-addon-material-ui'
import { theme } from '@woovi-ui/react'
export const decorators = [
  muiTheme(theme)
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  }
}