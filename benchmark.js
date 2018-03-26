const Benchmark = require('benchmark')

const suite = new Benchmark.Suite()

const { uniqueArr_mu, uniqueArr_immu, built_in } = require('./index')

const arr = [1, 1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 4]

// add tests
suite
  .add('uniqueArr_immu', () => {
    uniqueArr_immu(arr)
  })
  .add('uniqueArr_mu', () => {
    uniqueArr_mu(arr)
  })
  .add('built_in', () => {
    built_in(arr)
  })
  // add listeners
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  // run async
  .run({ async: true })
