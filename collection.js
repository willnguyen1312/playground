const aboutAuthor = new WeakMap() // Create New WeakMap
const currentAge = {} // key must be an object
const currentCity = {} // keys must be an object

aboutAuthor.set(currentAge, 30) // Set Key Values
aboutAuthor.set(currentCity, "Denver") // Key Values can be of different data types

console.log(aboutAuthor.has(currentCity)) // Test if WeakMap has a key

aboutAuthor.delete(currentAge) // Delete a key
