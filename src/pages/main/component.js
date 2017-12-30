const { createStore } = require('redux')
const reducers = require('../../reducers')

class MainPage {
  onCreate (input) {
    this.state = { preloadedState: input }
  }
}

module.exports = MainPage
