import roundRobin from 'bracketfun-web/utils/round-robin';

module('roundRobin');

test('can schedule four', function() {
  var competitors = ['alpha','bravo','charlie','delta'];

  var result = roundRobin(competitors);

  deepEqual(result[0],{'home': 'alpha', 'away': 'delta'});
  deepEqual(result[1],{'home': 'bravo', 'away': 'charlie'});
  deepEqual(result[2],{'home': 'alpha', 'away': 'bravo'});
  deepEqual(result[3],{'home': 'charlie', 'away': 'delta'});
  deepEqual(result[4],{'home': 'alpha', 'away': 'charlie'});
  deepEqual(result[5],{'home': 'delta', 'away': 'bravo'});
  deepEqual(competitors, ['alpha', 'bravo', 'charlie', 'delta']);
});

test('can schedule five', function() {
  var competitors = ['alpha','bravo','charlie','delta','echo'];

  var result = roundRobin(competitors);

  deepEqual(result[0],{'home': 'bravo', 'away': 'echo'});
  deepEqual(result[1],{'home': 'charlie', 'away': 'delta'});
  deepEqual(result[2],{'home': 'alpha', 'away': 'bravo'});
  deepEqual(result[3],{'home': 'delta', 'away': 'echo'});
  deepEqual(result[4],{'home': 'alpha', 'away': 'charlie'});
  deepEqual(result[5],{'home': 'delta', 'away': 'bravo'});
  deepEqual(result[6],{'home': 'alpha', 'away': 'delta'});
  deepEqual(result[7],{'home': 'echo', 'away': 'charlie'});
  deepEqual(result[8],{'home': 'alpha', 'away': 'echo'});
  deepEqual(result[9],{'home': 'bravo', 'away': 'charlie'});
  deepEqual(competitors, ['alpha', 'bravo', 'charlie', 'delta', 'echo']);
});

test('can schedule six', function() {
  var competitors = ['alpha','bravo','charlie','delta','echo','foxtrot'];

  var result = roundRobin(competitors);

  equal(15, result.length);
});

test('can schedule six', function() {
  var competitors = ['alpha','bravo','charlie','delta','echo','foxtrot','golf'];

  var result = roundRobin(competitors);

  equal(21, result.length);
});
