export const SET_PRODUCTS = 'SET_PRODUCTS'

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')
    const data = await response.json()
    dispatch({ type: SET_PRODUCTS, products: data })
  }
}
