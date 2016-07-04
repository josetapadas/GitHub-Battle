var React = require('react');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function PreviewBattle(props) {
  return props.isLoading === true
    ? <p>Loading...</p>
    : <div>Confirm Battle: {puke(props)}</div>
  ;
}

module.exports = PreviewBattle;
