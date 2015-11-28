import buildPools from 'titlematch-web/utils/build-pools';
import schedulePools from 'titlematch-web/utils/schedule-pools';

module('buildPools');

test('divides for 12', function() {
  var numPlayers = 12;

  var numPools = buildPools(numPlayers);

  deepEqual(numPools, ['A', 'B', 'C']);
});

test('divides for 15', function() {
  var numPlayers = 18;

  var numPools = buildPools(numPlayers);

  deepEqual(numPools, ['A', 'B', 'C', 'D', 'E', 'F']);
});

test('creates matchups for six with pools', function() {
  var competitors = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'];
  var pools = ['A', 'B'];

  var result = schedulePools(competitors, pools);

  deepEqual(result[0], {'home': 'charlie', 'away': 'echo', 'pool': 'A'});
  deepEqual(result[1], {'home': 'alpha', 'away': 'charlie', 'pool': 'A'});
  deepEqual(result[2], {'home': 'alpha', 'away': 'echo', 'pool': 'A'});
  deepEqual(result[3], {'home': 'delta', 'away': 'foxtrot', 'pool': 'B'});
  deepEqual(result[4], {'home': 'bravo', 'away': 'delta', 'pool': 'B'});
  deepEqual(result[5], {'home': 'bravo', 'away': 'foxtrot', 'pool': 'B'});
});
