import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useState } from 'react'
import styles from './CartQttyItem.module.css'
const CartQttyItem = (props) => {
  const { isMobile } = props
  const [qtty, setQtty] = useState(1)
  const addQtty = () => {
    setQtty(qtty + 1)
  }
  const removeQtty = () => {
    setQtty(qtty - 1)
  }
  return (
    <div className={styles.container} style={isMobile ? { justifyContent: 'center' } : {}}>
      <IconButton onClick={removeQtty} disabled={qtty === 1} aria-label="delete">
        <RemoveIcon fontSize="small" />
      </IconButton>
      <span>{qtty}</span>
      <IconButton color="primary" onClick={addQtty} aria-label="delete">
        <AddIcon fontSize="small" />
      </IconButton>
    </div>
  )
}
export default CartQttyItem
