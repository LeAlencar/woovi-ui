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