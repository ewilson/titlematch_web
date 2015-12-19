import roundRobin from 'titlematch-web/utils/round-robin';

export default function schedulePools(competitors, poolNames) {
  var pools = initPools(poolNames, competitors);
  var matches = buildMatches(pools, poolNames);
  return interleave(matches, poolNames.length);
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

var interleave = function(matches, numPools) {
  var mixed = [];
  var matchesInPools = matches.length / numPools;
  for (var i = 0; i < matches.length; i++) {
    var poolNum = i % numPools;
    var matchNum = Math.floor(i/numPools);
    var newIdx = poolNum * matchesInPools + matchNum;
    mixed.push(matches[newIdx]);
  }
  return mixed;
};
