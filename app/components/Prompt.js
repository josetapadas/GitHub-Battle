var React = require('react');
var PropTypes = React.PropTypes;

// stateless function component
function Prompt(props) {
  return (
    <div className="mui-row">
      <div className="mui-col-md-12">
        <h1>{props.header}</h1>
      </div>
      <div className="mui-col-md-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="mui-textfield">
            <input
              placeholder="GitHub username"
              type="text"
              value={props.username}
              onChange={props.onUpdateUser}/>
          </div>
          <div>
            <button
              type="submit"
              className="mui-btn mui-btn--primary">
              Continue >
            </button>
          </div>
        </form>
      </div>
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
