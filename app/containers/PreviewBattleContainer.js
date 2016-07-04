var React = require('react');
var PreviewBattle = require('../components/PreviewBattle');
var GithubHelpers = require('../utils/GithubHelpers');

var PreviewBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    };
  },
  componentDidMount: function() {
    var query = this.props.location.query;

    GithubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players) {
      this.setState({
        isLoading: false,
        playersInfo: [ players[0], players[1] ]
      });
    }.bind(this));
  },
  handleBattleInit: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },
  render: function() {
    return (
      <PreviewBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onBattleInit={this.handleBattleInit}/>
    );
  }
});

module.exports = PreviewBattleContainer;
