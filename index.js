const arr = [1, 1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 4]

const uniqueArr_immu = ar =>
  ar.reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])
const uniqueArr_mu = (ar) => {
  const result = []
  for (let i = 0; i < ar.length; i += 1) {
    if (result.indexOf(ar[i]) === -1) {
      result.push(ar[i])
    }
  }
  return result
}

const built_in = ar => Array.from(new Set(ar))

module.exports = {
  uniqueArr_immu,
  built_in,
  uniqueArr_mu,
}
