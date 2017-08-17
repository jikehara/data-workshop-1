import getUserById from './getUserById'
import getProductById from './getProductById'

const getOrderInfo = (data) => {
  if (data == null || data.orders == null) {
    return null
  } else {
    const tempOrders = []
    data.orders.forEach((o) => {
      tempOrders.push({
        userName: getUserById(data, o.userId).name,
        orderId: o.id,
        price: getProductById(data, o.productId).price
      })
    })
    return tempOrders
  }
}

export default getOrderInfo
