import roundRobin from 'bracketfun-web/utils/round-robin';

export default function schedulePools(competitors, poolNames) {
  var pools = initPools(poolNames, competitors);
  return buildMatches(pools, poolNames);
}

// pools will have keys being poolNames, values being lists of competitors
var initPools = function(names, players) {
  var pools = {};
  for (var i = 0; i < names.length; i++) {
    var pool = names[i];
    pools[pool] = players.filterBy('pool', pool);
  }
  return pools;
};

// matches will be a list of objects with keys 'home', 'away', and 'pool'
var buildMatches = function(pools, poolNames) {
  var matches = [];
  for (var i = 0; i < poolNames.length; i++) {
    var poolMatches = roundRobin(pools[poolNames[i]]);
    matches = matches.concat(poolMatches);
  }
  return matches;
};
