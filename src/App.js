import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import Nav from './components/Nav/Index'
import itemReducer from './store/reducers/item'
import userReducer from './store/reducers/user'
import cartReducer from './store/reducers/cart'
import theme from './theme/theme'
import Store from './views/Store/Index'

const rootReducer = combineReducers({
  user: userReducer,
  items: itemReducer,
  cart: cartReducer
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Nav />
        <Store />
      </Provider>
    </ThemeProvider>
  )
}

export default App
