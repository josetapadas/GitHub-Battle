var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="mui-row">
        <div className="mui-col-md-12">
          <h1>GitHub Battle</h1>
        </div>

        <div className="mui-col-md-12">
          <div className="mui-row">
            <div className="mui-col-md-12">
              <p>Welcome to the GitHub battle app!</p>
            </div>
            <div className="mui-col-md-12">
              <Link to='/playerOne'>
                <button
                  type="button"
                  className="mui-btn mui-btn--primary">
                  Start the battle!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
