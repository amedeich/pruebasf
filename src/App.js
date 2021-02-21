import { ThemeProvider } from '@material-ui/styles'
import Nav from './components/Nav/Index'
import theme from './theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  )
}

export default App
