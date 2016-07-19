var React = require('react');

function puke(obj) {
  return <pre> {JSON.stringify(obj, 2, ' ')} </pre>
}

var Results = React.createClass({
  render: function() {
    return (
      <div>{puke(this.props)}</div>
    )
  }
});

Results.PropTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  scores: React.PropTypes.array.isRequired,
  playersInfo: React.PropTypes.array.isRequired
}

module.exports = Results;
