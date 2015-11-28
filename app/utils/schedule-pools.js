import roundRobin from 'titlematch-web/utils/round-robin';

export default function schedulePools(competitors, poolNames) {
  // pools will have keys being poolNames, values being lists of competitors
  var pools = initPools(poolNames);
  for (var i = 0; i < competitors.length; i++) {
    var poolName = poolNames[i % poolNames.length];
    pools[poolName].push(competitors[i]);
  }

  // matches will be a list of objects with keys 'home', 'away', and 'pool'
  var matches = [];
  for (i = 0; i < poolNames.length; i++) {
    var poolMatches = roundRobin(pools[poolNames[i]]);
    for (var j = 0; j < poolMatches.length; j++) {
      poolMatches[j]['pool'] = poolNames[i];
    }
    matches = matches.concat(poolMatches);
  }
  return matches;
}

// pools will have keys being poolNames, values being lists of competitors
var initPools = function(names) {
  var pools = {};
  for (var i = 0; i < names.length; i++) {
    pools[names[i]] = [];
  }
  return pools;
};
