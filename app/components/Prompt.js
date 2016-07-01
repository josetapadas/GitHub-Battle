var React = require('react');
var PropTypes = React.PropTypes;

var Prompt = React.createClass({
  propTypes: {
      header: PropTypes.string.isRequired,
      onUpdateUser: PropTypes.func.isRequired,
      onSubmitUser: PropTypes.func.isRequired,
      username: PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        <form onSubmit={this.props.onSubmitUser}>
          <div>
            <input
              placeholder="GitHub username"
              type="text"
              value={this.props.username}
              onChange={this.props.onUpdateUser}/>
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

module.exports = Prompt;
