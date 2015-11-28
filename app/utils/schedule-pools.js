import roundRobin from 'titlematch-web/utils/round-robin';

export default function schedulePools(competitors, poolNames) {
  var pools = initPools(poolNames);
  populatePools(competitors, pools, poolNames);
  var matches = buildMatches(pools, poolNames);
  return interleave(matches, poolNames.length);
}

// pools will have keys being poolNames, values being lists of competitors
var initPools = function(names) {
  var pools = {};
  for (var i = 0; i < names.length; i++) {
    pools[names[i]] = [];
  }
  return pools;
};

var populatePools = function(competitors, pools, poolNames) {
  for (var i = 0; i < competitors.length; i++) {
    var poolName = poolNames[i % poolNames.length];
    pools[poolName].push(competitors[i]);
  }
};

// matches will be a list of objects with keys 'home', 'away', and 'pool'
var buildMatches = function(pools, poolNames) {
  var matches = [];
  for (var i = 0; i < poolNames.length; i++) {
    var poolMatches = roundRobin(pools[poolNames[i]]);
    // adding pool name to each match
    for (var j = 0; j < poolMatches.length; j++) {
      poolMatches[j]['pool'] = poolNames[i];
    }
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
