import roundRobin from 'titlematch-web/utils/round-robin';

module('roundRobin');

test('can schedule four', function() {
  var competitors = ['alpha','bravo','charlie','delta'];

  var result = roundRobin(competitors);

  deepEqual(result[0],['alpha','delta']);
  deepEqual(result[1],['bravo','charlie']);
  deepEqual(result[2],['alpha','bravo']);
  deepEqual(result[3],['charlie','delta']);
  deepEqual(result[4],['alpha','charlie']);
  deepEqual(result[5],['delta','bravo']);
});

test('can schedule five', function() {
  var competitors = ['alpha','bravo','charlie','delta','echo'];

  var result = roundRobin(competitors);

  deepEqual(result[0],['bravo','echo']);
  deepEqual(result[1],['charlie','delta']);
  deepEqual(result[2],['alpha','bravo']);
  deepEqual(result[3],['delta','echo']);
  deepEqual(result[4],['alpha','charlie']);
  deepEqual(result[5],['delta','bravo']);
  deepEqual(result[6],['alpha','delta']);
  deepEqual(result[7],['echo','charlie']);
  deepEqual(result[8],['alpha','echo']);
  deepEqual(result[9],['bravo','charlie']);
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