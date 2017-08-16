import getProductById from './getProductById'
import getUserById from './getUserById'

export default data => {
  if (data == null || data.orders == null) return null

  return data.orders.map(o => ({
    orderId: o.id,
    userName: getUserById(data, o.userId).name,
    price: getProductById(data, o.productId).price
  }))
}
