export function filterData(data, filtersArray) {
  if (filtersArray.length < 1) return data

  data = data.filter((product) => product.Categories.find((category) => category.name === filtersArray[0]))
  return filterData(data, filtersArray.slice(1))

}


export function orderByProperty(array, property) {

  
  if (array.length < 1) return array

  const left = []
  const right = []
  const pybot = array[0]

  for (let i = 1; i < array.length; i++) {
    array[i][property] < pybot[property] ? left.push(array[i]) : right.push(array[i])
  }
  return [].concat(orderByProperty(left, property), pybot, orderByProperty(right, property))

}


export function orederOption(array, orderTipe) {
  const verify = array.filter(e => e.sold !== 0)
  switch (orderTipe) {
    case "All":
      return array

    case "Min":
      return orderByProperty(array, "price")

    case "Max":
      return orderByProperty(array, "price").reverse()

    case "Less Sold":
      
      return verify.length ? orderByProperty(array, "sold") : array

      case "Best Seller":

      return verify.length ? orderByProperty(array, "sold").reverse() : array
    default: return array
      
  }
}