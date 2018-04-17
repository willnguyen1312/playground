const { normalize, schema, denormalize } = require("normalizr")

const originalData = {
  id: "123",
  author: {
    id: "1",
    name: "Paul"
  },
  title: "My awesome blog post",
  comments: [
    {
      id: "324",
      commenter: {
        id: "2",
        name: "Nicole"
      }
    }
  ]
}

// Define a users schema
const user = new schema.Entity("users")

// Define your comments schema
const comment = new schema.Entity("comments", {
  commenter: user
})

// Define your article
const article = new schema.Entity("articles", {
  author: user,
  comments: [comment]
})

const per = new schema.Entity("users")
const mySchema = { users: [per] }
const entities = { users: { "1": { id: 1 }, "2": { id: 2 } } }
const denormalizedData = denormalize({ users: [1, 2] }, mySchema, entities)
console.log(denormalizedData)
