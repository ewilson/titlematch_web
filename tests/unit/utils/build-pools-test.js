import buildPools from 'bracketfun-web/utils/build-pools';
import schedulePools from 'bracketfun-web/utils/schedule-pools';

module('buildPools');

test('divides for 12', function() {
  var numPlayers = 12;

  var numPools = buildPools(numPlayers, 1);

  deepEqual(numPools, ['A', 'B', 'C']);
});

test('divides for 18', function() {
  var numPlayers = 18;

  var numPools = buildPools(numPlayers, 1);

  deepEqual(numPools, ['A', 'B', 'C', 'D', 'E', 'F']);
});
