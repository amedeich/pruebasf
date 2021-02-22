import React, { useEffect, Fragment, useState } from 'react'
import CardItem from '../../components/CardItem/Index'
import Carousel from 'react-multi-carousel'
import { useSelector, useDispatch } from 'react-redux'
import * as itemsActions from '../../store/actions/items'
import 'react-multi-carousel/lib/styles.css'
import { Typography } from '@material-ui/core'

const Store = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { products } = useSelector((state) => state.items)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true)
      await dispatch(itemsActions.fetchProducts())
      setIsLoading(false)
    }
    loadProducts()
  }, [dispatch])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 0 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <div style={{ margin: 20 }}>
      <h2>Nuevo en SuperFüds</h2>
      <Fragment>
        {isLoading ? (
          <div style={{ textAlign: 'center' }}>Cargando productos...</div>
        ) : (
          <div>
            {products.length ? (
              <Carousel responsive={responsive}>
                {products.map((item, i) => (
                  <React.Fragment key={item.id}>
                    <CardItem product={item} />
                  </React.Fragment>
                ))}
              </Carousel>
            ) : (
              <Typography style={{ textAlign: 'center' }}>No existen productos</Typography>
            )}
          </div>
        )}
      </Fragment>
    </div>
  )
}
export default Store
