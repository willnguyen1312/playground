const nodeList = Array.from(document.querySelectorAll(".txt-blue.font16.bold"))

const dataBack = {}

const priceList = nodeList
  .map(x => x.innerText)
  .map(x => x.substring(0, x.indexOf(",")))
  .map(Number)

const max = `${Math.max(...priceList)},000`

const arrAllowance = []

const findItem = (nodeList, index) => {
  const foundPrice = nodeList[
    index
  ].parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling
    .querySelector("h3")
    .innerText.trim()

  const foundImageUrl = nodeList[
    index
  ].parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.querySelector(
    "img"
  ).src

  const item = {
    price: foundPrice,
    name: `${priceList[index]},000`,
    imageUrl: foundImageUrl
  }
  return item
}

const findMax = () => {
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].innerText === max) {
      const item = findItem(nodeList, i)
      dataBack.max = item
      break
    }
  }
}
/**
 *
 *
 * @param {Number} budget
 */
function withBudget(budget, range = 10) {
  const lowerBound = budget - range
  if (budget) {
    const search = `${budget},000`
    let count = 1

    for (let i = 0; i < nodeList.length; i++) {
      if (priceList[i] >= lowerBound && priceList[i] <= budget && count % 2) {
        const item = findItem(nodeList, i)
        arrAllowance.push(item)
      }
      count += 1
    }
    dataBack.allowance = arrAllowance
  }
}

findMax()
withBudget(60)
