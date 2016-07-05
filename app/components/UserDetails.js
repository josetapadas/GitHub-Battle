var React = require('react');
var PropTypes = React.PropTypes;

var UserDetails = function(params) {
  return (
    <div className="mui-row">
      <div className="mui-col-md-12">
        <img src={params.info.avatar_url} style={{'max-width': '100%'}} />
      </div>
      <div className="mui-col-md-12">
        <p><b>Name:</b> {params.info.name}</p>
      </div>
      <div className="mui-col-md-12">
        <p><b>Company:</b> {params.info.company}</p>
      </div>
      <div className="mui-col-md-12">
        <p><b>Blog:</b> <a href={params.info.blog}>{params.info.blog}</a></p>
      </div>
      <div className="mui-col-md-12">
        <p><b>Followers:</b> {params.info.followers}</p>
      </div>
      <div className="mui-col-md-12">
        <p><b>Following:</b> {params.info.following}</p>
      </div>
      <div className="mui-col-md-12">
        <p><b>Public Repos:</b> {params.info.public_repos}</p>
      </div>
      <div className="mui-col-md-12">
        <p><b>Public Gists:</b> {params.info.public_gists}</p>
      </div>
    </div>
  );
};

module.exports = UserDetails;
