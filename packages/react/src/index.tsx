import { ComponentProps } from "react";
import { ThemeProvider } from "@mui/material"
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { colors } from '@woovi-ui/tokens'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.woovi300,
      light: colors.woovi200,
      dark: colors.woovi700
    },
    secondary: {
      main: colors.wooviBlue300,
      light: colors.wooviBlue200,
      dark: colors.wooviBlue600
    }
  }
});

export const ButtonComponent = ({ children, options }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...options} color="primary">{children}</Button>
    </ThemeProvider>
  )
}
export type ButtonProps = ComponentProps<typeof ButtonComponent>