import { Typography } from '@material-ui/core'
import styles from './CartImageItem.module.css'
const CartImageItem = (props) => {
  const { showPrice } = props
  const { product } = props
  return (
    <div className={styles.container}>
      <img width={100} height={100} className={styles.cover} alt="fruco" src={product.thumbnail} />
      <div className={styles.detail}>
        <Typography component="h3">Super Kole Chips</Typography>
        <Typography component="small">
          x{product.units_sf} unds - {product.net_content}
        </Typography>
        <Typography color="primary" component="small">
          {product.supplier}
        </Typography>
        {showPrice && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography color="primary" component="h2">
              $
            </Typography>
            <Typography component="h2">{product.price_real}</Typography>
          </div>
        )}
      </div>
    </div>
  )
}
export default CartImageItem
