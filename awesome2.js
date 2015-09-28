$(document).ready(function() {

  var peopleIndex = [
  {
  name: 'Trinity',
  occupation: 'programmer',
  awesomeIndex: 10
  },
  {
  name: 'Mater',
  occupation: 'tow truck'
  },
  {
  name: 'Number 5',
  occupation: 'programmer',
  awesomeIndex: 7
  },
  {
  name: 'Alice',
  occupation: 'programmer',
  awesomeIndex: 9
  },
  {
  name: 'Zaphod',
  occupation: 'President of the Galaxy'
  },
  {
  name: 'Bob Parr',
  occupation: 'programmer',
  awesomeIndex: 6
  }];

  var counter = 1;

  var indexAccumulate = _.pluck(peopleIndex, 'awesomeIndex');

  var total = _.reduce(_.compact(indexAccumulate), function(a, b) {
    counter++;
    return a + b;
  })

  var average = total / counter;

  $('#awesome-index').append("<p> Programmers have an average awesome index of <b>" + average + "</b>.</p>");

});
