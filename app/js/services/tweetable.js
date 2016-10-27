angular.module('NoteWrangler')
.provider('Tweetable', function TweetableProvider() {
  var characterLength = 144;
  this.setLength = function(maxLength){
    characterLength = maxLength;
  };
  this.$get = function($http) {
    return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        maxLength : characterLength
      }
    });
  };
 };
});

// curl -H 'Content-Type: application/json' -d '{"description":"Example of description"}' http://localhost:3000/tweet
