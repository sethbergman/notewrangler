angular.module('NoteWrangler', ['ngRoute'])
.config(['TweetableProvider', function(TweetableProvider){
  TweetableProvider.setLength(40);
}]);
