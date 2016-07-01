var React = require('react');
var ReactDOM = require('react-dom');

var SAMPLE_DATA = {
  name: 'José Tapadas Alves',
  image: 'https://avatars3.githubusercontent.com/u/2318265',
  username: 'josetapadas'
};

var ProfileImage = React.createClass({
  render: function() {
    return (
      <div>
        <img src={this.props.image} style={{width: 100, height: 100}}/>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>
        <span>{this.props.name}</span>
      </div>
    );
  }
});

var Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href);
  },
  render: function() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    );
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={"http://www.github.com/" + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfileImage image={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Avatar user={SAMPLE_DATA}/>,
  document.getElementById('app')
);
