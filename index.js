import { readFile, writeFile } from 'fs'
import { promisify } from 'util'

const read = promisify(readFile)
const write = promisify(writeFile)

// eslint-disable-next-line
async function exe(fileName) {
  try {
    const data = await read(fileName, { encoding: 'utf-8' })
    return data.split('\n').slice(1)
  } catch (error) {
    console.log(error)
  }
}

const sum = (data) => {
  const [first, second] = data.split(' ')
  return +first + +second
}

exe('./B.in').then(async (data) => {
  const result = data.map(item => sum(item)).join('\n')
  await write('./B.out', result)
})
