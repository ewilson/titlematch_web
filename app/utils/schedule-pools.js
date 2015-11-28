export default function schedulePools(competitors, poolNames) {
  var pools = {};
  for (var i = 0; i < poolNames.length; i++) {
    pools[poolNames[i]] = [];
  }
  for (i = 0; i < competitors.length; i++) {
    var poolName = poolNames[i % poolNames.length];
    pools[poolName].push(competitors[i]);
  }
  console.log(pools['A']);
  console.log(pools['B']);

  return {};
}
