export default function buildPools(numPlayers, type) {
  if (type === 1) {
    var pools = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    var poolDivs = {
      6: 2,
      8: 2,
      9: 3,
      10: 2,
      12: 3,
      14: 7,
      15: 3,
      16: 4,
      18: 6,
      20: 5,
      21: 7,
      24: 6,
      25: 5,
      27: 9,
      28: 7,
      30: 6,
      32: 8
    };
    return pools.slice(0,poolDivs[numPlayers]);
  } else {
    return ['A'];
  }
}
