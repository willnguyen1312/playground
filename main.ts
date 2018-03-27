function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved")
      // reject(new Error("Reject"))
    }, 2000)
  })
}

async function asyncCall() {
  console.log("calling")
  try {
    const result = await Promise.all([
      resolveAfter2Seconds(),
      resolveAfter2Seconds()
    ])
    console.log(result)
  } catch (error) {
    console.log(error.message)
  }
  // expected output: "resolved"
}

asyncCall()
