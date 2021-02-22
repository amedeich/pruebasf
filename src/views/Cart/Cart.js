import { Typography } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartMobile from '../../components/CartMobile/Index'
import CartTable from '../../components/CartTable/Index'
import styles from './Cart.module.css'
const Cart = (props) => {
  const { items } = useSelector((state) => state.cart)
  const [width, setWidth] = useState(window.innerWidth)
  const isMobile = width <= 768
  const { closeDrawer } = props
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])
  return (
    <div style={{ margin: 20 }}>
      <div onClick={closeDrawer(false)} className={styles.backBtn}>
        <ArrowBackIosIcon color="primary" fontSize="small" />
        <Typography component="small">Volver a la tienda</Typography>
      </div>
      <h1>Carritos de compras</h1>
      <div>{isMobile ? <CartMobile isMobile={isMobile} /> : <CartTable isMobile={isMobile} />}</div>
    </div>
  )
}
export default Cart
