var React = require('react');
var PropTypes = React.PropTypes;

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function PreviewBattle(props) {
  return props.isLoading === true
    ? (
      <div className="mui-row">
        <div className="mui-col-md-12">
          <h1>Loading...</h1>
        </div>
      </div>
    )
    : (
      <div className="mui-row">
        <div className="mui-col-md-12">
          <h1>Confirm Players</h1>
        </div>
        <div className="mui-col-md-12">
          <div className="mui-row">
            <div className="mui-col-md-6">
              <div className="mui-row">
                <div className="mui-col-md-12">
                  <h2>Player #1</h2>
                </div>
                <div className="mui-col-md-12">
                  {puke(props.playersInfo[0])}
                </div>
              </div>
            </div>
            <div className="mui-col-md-6">
              <div className="mui-row">
                <div className="mui-col-md-12">
                  <h2>Player #2</h2>
                </div>
                <div className="mui-col-md-12">
                  {puke(props.playersInfo[1])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

PreviewBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onBattleInit: PropTypes.func.isRequired
}

module.exports = PreviewBattle;
