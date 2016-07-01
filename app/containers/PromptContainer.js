var React = require('react');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    };
  },
  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  onSubmitUser: function(e) {
    e.preventDefault();

    var username = this.state.username;

    this.setState({
      username: ''
    });

    if(this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },
  render: function() {
    return (
      <div>
        <h2>{this.props.route.header}</h2>
        <form onSubmit={this.onSubmitUser}>
          <div>
            <input
              placeholder="GitHub username"
              type="text"
              value={this.state.username}
              onChange={this.onUpdateUser}/>
          </div>
          <div>
            <button
              type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = PromptContainer;
