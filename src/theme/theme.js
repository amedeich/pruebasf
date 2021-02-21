import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7bd77b',
      main: '#48a54d',
      dark: '#057521',
      contrastText: '#000000'
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#ccc',
      contrastText: '#000000'
    }
  },
  typography: {
    fontFamily: ['sf-font-regular', 'sf-font-bold'].join(',')
  }
})

export default theme
