import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import styles from './CardItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import * as cartReducer from '../../store/actions/cart'

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}))
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}))(Tooltip)

const CardItem = (props) => {
  const [isHover, setHover] = useState(false)
  const classes = useStyles()
  const { product } = props
  const { items: itemsInCart } = useSelector((state) => state.cart)
  const itemInCart = itemsInCart.includes(product)
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartReducer.addItem(product))
  }
  const ImgContainer = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img className={styles.cardImg} alt="fruco" src={product.thumbnail} />
        <div className={styles.imgTool}>
          {product.sellos.map((sello) => (
            <HtmlTooltip
              key={sello.name}
              title={
                <React.Fragment>
                  <Typography color="inherit">Producto</Typography>
                  <Typography color="primary">{sello.name}</Typography>
                </React.Fragment>
              }
            >
              <IconButton size="small">
                <Avatar className={classes.small} alt="Remy Sharp" src={sello.image} />
              </IconButton>
            </HtmlTooltip>
          ))}
        </div>
      </div>
    )
  }
  return (
    <Card onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={styles.card}>
      {ImgContainer()}
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography gutterBottom color="primary" component="span">
            {product.supplier}
          </Typography>
          <Chip style={{ fontWeight: 700 }} color="primary" size="small" label={product.net_content} />
        </div>
        <Typography
          style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontWeight: 'bold' }}
          component="p"
        >
          {product.description}
        </Typography>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <Typography style={{ fontSize: 25, fontWeight: 'bold' }} color="primary">
            $
          </Typography>
          <Typography style={{ fontSize: 25, fontWeight: 'bold' }}>{product.price_real}</Typography>
          <b style={{ color: '#888', marginLeft: 2 }}>x {product.units_sf} unds</b>
        </div>
      </CardContent>
      <CardActions style={{ minHeight: 42, padding: 0 }}>
        {isHover ? (
          <Button
            disabled={itemInCart}
            onClick={addToCart}
            style={{ width: '100%' }}
            variant="contained"
            size="large"
            color="primary"
          >
            {itemInCart ? 'Articulo en el carrito' : 'Agregar al carrito'}
          </Button>
        ) : (
          ''
        )}
      </CardActions>
    </Card>
  )
}
export default CardItem
