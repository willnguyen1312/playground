function resolveAfter2Seconds(stuff) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`yeah${stuff}`)
      resolve(stuff)
    }, 1000)
  })
}

const arr = [1, 2, 3, 4, 5]

// async function asyncCall() {
//   console.log('calling')
//   const result = await resolveAfter2Seconds()
//   console.log(result)
//   // expected output: "resolved"
// }

// asyncCall()

async function* asyncGenerator() {
  for (const item of arr) {
    yield resolveAfter2Seconds(item)
  }
}
(async () => {
  for await (const i of asyncGenerator()) {
    console.log(i)
  }
})().catch(e => console.error(e))
