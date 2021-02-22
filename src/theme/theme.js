import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5eab5c',
      main: '#2c7b30',
      dark: '#004e03',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#ccc',
      contrastText: '#000000'
    },
    danger: {
      main: red[500],
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: ['sf-font-regular', 'sf-font-bold'].join(',')
  }
})

theme.palette.danger = theme.palette.augmentColor(theme.palette.danger)

export default theme
