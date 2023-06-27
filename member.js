function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '=',
      skills: '='
    },
    templateUrl: 'views/member.html'
  };
}