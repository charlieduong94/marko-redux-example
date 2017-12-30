const { connect } = require('marko-redux')

class NestedContainer {
  onCreate (input, out) {
    this.state = {
      count: input.count
    }
  }

  onInput (input, out) {
    this.state.count = input.count
  }
}

function mapStateToInput (state) {
  return {
    count: state.count
  }
}

module.exports = connect({
  mapStateToInput
})(NestedContainer)
