var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>GitHub Battle</h1>
        <p>This is not a description text</p>
        <Link to='/playerOne'>
          <button
            type="button">
            Start the battle!
          </button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;
