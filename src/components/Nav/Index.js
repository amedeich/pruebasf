import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../../views/Cart/Cart'
import classes from './Nav.module.css'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge)

const Nav = () => {
  const user = useSelector((state) => state.user)
  const { items } = useSelector((state) => state.cart)
  const [drawer, setDrawer] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawer(open)
  }
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <h3>
          <i>SuperFüds</i>
        </h3>
        <div>
          <Paper className={classes.searchBoxContainer}>
            <InputBase
              className={classes.searchBoxInput}
              placeholder="Busca por producto o marca..."
              inputProps={{
                'aria-label': 'busca por producto o marca...',
                className: classes.searchBoxInputField
              }}
            />
            <IconButton className={classes.searchBoxIconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className={classes.sideRightContainer}>
          <IconButton onClick={toggleDrawer(true)}>
            {items.length ? (
              <StyledBadge badgeContent={items.length} color="error">
                <ShoppingCartIcon color="secondary" />
              </StyledBadge>
            ) : (
              <ShoppingCartIcon color="secondary" />
            )}
          </IconButton>
          <div className={classes.sideRightUserContainer}>
            <span className={classes.userName}>{user.name}</span>
            <Avatar className={classes.sideRightAvatar}>{user.initials}</Avatar>
          </div>
          <Drawer anchor={'right'} open={drawer} onClose={toggleDrawer(false)}>
            <Cart closeDrawer={toggleDrawer} />
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
