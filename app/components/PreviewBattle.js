var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

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
            <UserDetailsWrapper colWidth='6' header='Player One'>
              <UserDetails info={props.playersInfo[0]} />
            </UserDetailsWrapper>

            <UserDetailsWrapper colWidth='6' header='Player Two'>
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
          </div>
        </div>

        <div className="mui-col-md-6">
          <Link to="/playerOne">
            <button
              className="mui-btn mui-btn--danger">
              &lt; Reset
            </button>
          </Link>
        </div>
        <div className="mui-col-md-6">
          <button
            className="mui-btn mui-btn--primary"
            onClick={props.onBattleInit}>
            Fight! &gt;
          </button>
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
