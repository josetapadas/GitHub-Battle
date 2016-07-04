var React = require('react');
var PropTypes = React.PropTypes;

// stateless function component
function Prompt(props) {
  return (
    <div>
      <h2>{props.header}</h2>
      <form onSubmit={props.onSubmitUser}>
        <div>
          <input
            placeholder="GitHub username"
            type="text"
            value={props.username}
            onChange={props.onUpdateUser}/>
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

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = Prompt;
