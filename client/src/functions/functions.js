export function filterData (data, array) {
    if(array.length < 1) return data
    
    data = data.filter((product) => product.Categories.find((category) => category.name  === array[0]))  
    return filterData(data, array.slice(1))
    
  }