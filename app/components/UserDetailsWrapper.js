var React = require('react');
var PropTypes = React.PropTypes;

var UserDetailsWrapper = function(props) {
  return (
    <div className={"mui-col-md-" + props.colWidth}>
      <div className="mui-row">
        <div className="mui-col-md-12">
          <h2>{props.header}</h2>
        </div>
        <div className="mui-col-md-12">
          {props.children}
        </div>
      </div>
    </div>
  );
}

UserDetailsWrapper.PropTypes = {
  header: PropTypes.string.isRequired
}

module.exports = UserDetailsWrapper;
