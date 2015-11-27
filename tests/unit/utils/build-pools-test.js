import buildPools from 'titlematch-web/utils/build-pools';

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
