var axios = require('axios');

// GitHub authentication
var id = 'YOUR_API_KEY';
var sec = 'YOUR_SECRET_ID';
var params = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + params);
}

var GithubHelpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      });
    }).catch(function(error){
      console.warn("Error in getPlayersInfo", error)
    });
  }
}

module.exports = GithubHelpers;
