angular.module('NoteWrangler')
.factory('Tweetable', ['$http', function TweetableFactory($http) {
  var characterLength = 140;

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
}]);

// angular.module('NoteWrangler')
// .provider('Tweetable', function TweetableProvidr() {
//   this.$get = function($http){
//     return function(){
//       return function(characterLength){
//         return
//       }
//     }
//   });
//   var characterLength = 144;
//
//   return function(potentialTweet) {
//     return $http({
//       method: 'POST',
//       url: 'http://gentle-spire-1153.herokuapp.com/tweet',
//       data: {
//         description: potentialTweet,
//         maxLength: characterLength
//       }
//     });
//   };
// }]);

// curl -H 'Content-Type: application/json' -d '{"description":"Example of description"}' http://localhost:3000/tweet
