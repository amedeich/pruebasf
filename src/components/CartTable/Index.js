import { Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import CartImageItem from '../../components/CartImageItem/Index'
import CartQttyItem from '../../components/CartQttyItem/Index'
import * as cartActions from '../../store/actions/cart'
import styles from './CartTable.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'
const CartTable = (props) => {
  const { isMobile } = props
  const { items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const removeItem = (id) => {
    dispatch(cartActions.removeItem(id))
  }
  return (
    <Fragment>
      {items.length ? (
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Items</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
            {items.map((item, i) => (
              <tr key={i}>
                <td>
                  <CartImageItem product={item} />
                </td>
                <td>
                  <CartQttyItem product={item} isMobile={isMobile} />
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography color="primary" component="h2">
                        $
                      </Typography>
                      <Typography component="h2">{item.price_real}</Typography>
                    </div>
                    <IconButton onClick={() => removeItem(item.id)} aria-label="delete">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <i>No existen productos en el carrito</i>
        </div>
      )}
    </Fragment>
  )
}
export default CartTable
