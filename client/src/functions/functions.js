export function filterData(data, array) {
  if (array.length < 1) return data

  data = data.filter((product) => product.Categories.find((category) => category.name === array[0]))
  return filterData(data, array.slice(1))

}


export function passwordCreate() {
  let newPass = ""
  const leters = ["A", "X", "R", "W", "T"]

  for (let i = 0; i < 2; i++) {
    for (let x = 0; x < 4; x++) {
      i === 0
        ?
        newPass += leters[Math.round(Math.random() * (leters.length - 1))]
        :
        newPass += Math.round(Math.random() * 9)
    }
  } return newPass.slice(0, 4) + "-" + newPass.slice(4)
}