import buildPools from 'titlematch-web/utils/build-pools';

export default function assignPools(playersArray, type) {
  var pools = buildPools(playersArray.length, type);
  for (var i = 0; i < playersArray.length; i++) {
    var pool = pools[i % pools.length];
    var player = playersArray[i];
    player.set('pool', pool);
    player.save();
  }
  return pools;
}
