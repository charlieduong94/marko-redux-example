const { createStore } = require('redux')
const reducers = require('../../reducers')

class Root {
  onCreate ({ preloadedState }) {
    this.state = {
      store: createStore(reducers, preloadedState)
    }
  }
}

module.exports = Root
