const firstArr = [1, 3, 6]
const secondArr = [2, 5, 6, 7]

/**
 *
 *
 * @param {Array<Number>} first
 * @param {Array<Number>} second
 */
const merge = (first, second) => {
  const result = []
  let i = 0
  let j = 0

  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      result.push(first[i])
      i += 1
    } else {
      result.push(second[j])
      j += 1
    }
  }

  if (i < first.length) {
    result.push(...first.slice(i))
  } else {
    result.push(...second.slice(j))
  }

  return result
}

console.log(merge(firstArr, secondArr))
