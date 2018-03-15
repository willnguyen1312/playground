// eslint-disable-next-line
const events = (function() {
  const topics = {}
  const hOP = topics.hasOwnProperty

  return {
    subscribe(topic, listener) {
      // Create the topic's object if not yet created
      if (!hOP.call(topics, topic)) topics[topic] = []

      // Add the listener to queue
      const index = topics[topic].push(listener) - 1

      // Provide handle back for removal of topic
      return {
        remove() {
          delete topics[topic][index]
        },
      }
    },
    publish(topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if (!hOP.call(topics, topic)) return

      // Cycle through topics queue, fire!
      topics[topic].forEach((item) => {
        item(info !== undefined ? info : {})
      })
    },
  }
})()

const subscription = events.subscribe('/page/load', (obj) => {
  // Do something now that the event has occurred
  console.log(obj)
})

events.publish('/page/load', {
  url: 'first', // any argument
})

events.publish('/page/load', {
  url: 'second', // any argument
})

subscription.remove()

events.publish('/page/load', {
  url: 'N/A', // any argument
})
