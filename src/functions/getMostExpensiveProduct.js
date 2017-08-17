const getMostExpensiveProduct = (data) => {
  if (data == null || data.products == null) {
    return null
  } else {
    let tempMostExpensive = data.products[0]
    data.products.forEach((p) => {
      if (tempMostExpensive.price < p.price) {
        tempMostExpensive = p
      }
    })
    return tempMostExpensive
  }
}

export default getMostExpensiveProduct
