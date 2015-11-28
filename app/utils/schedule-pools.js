import roundRobin from 'titlematch-web/utils/round-robin';

export default function schedulePools(competitors, poolNames) {
  var pools = {};
  for (var i = 0; i < poolNames.length; i++) {
    pools[poolNames[i]] = [];
  }
  for (i = 0; i < competitors.length; i++) {
    var poolName = poolNames[i % poolNames.length];
    pools[poolName].push(competitors[i]);
  }
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
