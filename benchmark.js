const Benchmark = require("benchmark")

const suite = new Benchmark.Suite()

// const { uniqueArr_mu, uniqueArr_immu, built_in } = require("./index")

const arr = [1, 1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 4]

const map = new Map()
map.set("a", "abc")
const obj = {}
obj.a = "abc"

// add tests
suite
  .add("Map", () => {
    map.set("b", "b")
    const a = map.get("a")
  })
  .add("Obj", () => {
    obj.b = "b"
    const a = obj.a
  })
  // add listeners
  .on("cycle", event => {
    console.log(String(event.target))
  })
  .on("complete", function() {
    console.log(`Fastest is ${this.filter("fastest").map("name")}`)
  })
  // run async
  .run({ async: true })
