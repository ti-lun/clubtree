function myFacebookLogin() {
  FB.login(function(){}, {scope: 'publish_actions'});
}