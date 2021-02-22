import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CartImageItem from '../../components/CartImageItem/Index'
import CartQttyItem from '../../components/CartQttyItem/Index'
import * as cartActions from '../../store/actions/cart'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'

const CartMobile = (props) => {
  const { isMobile } = props
  const { items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const removeItem = (id) => {
    dispatch(cartActions.removeItem(id))
  }
  return (
    <Fragment>
      {items.length ? (
        items.map((item, i) => (
          <Card style={{ margin: 6 }} key={i}>
            <CardContent>
              <CartImageItem product={item} showPrice={isMobile} />
              <CartQttyItem isMobile={isMobile} />
            </CardContent>
            <CardActions>
              <Button
                onClick={() => removeItem(item.id)}
                style={{ width: '100%', color: 'white', background: 'red' }}
                variant="contained"
                size="large"
              >
                Eliminar del carrito
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <div style={{ textAlign: 'center' }}>
          <i>No existen productos en el carrito</i>
        </div>
      )}
    </Fragment>
  )
}
export default CartMobile
