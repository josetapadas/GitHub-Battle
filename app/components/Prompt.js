var React = require('react');

var Prompt = React.createClass({
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
