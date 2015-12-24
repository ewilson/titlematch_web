export default function buildPools(numPlayers, type) {
  if (type === 1) {
    var pools = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    var poolDivs = {
      6: 2,
      8: 2,
      9: 3,
      10: 2,
      11: 3,
      12: 3,
      13: 4,
      14: 4,
      15: 5,
      16: 4,
      17: 5,
      18: 6,
      19: 5,
      20: 5,
      21: 7,
      22: 6,
      23: 6,
      24: 6,
      25: 5,
      26: 7,
      27: 9,
      28: 7,
      29: 8,
      30: 6,
      31: 8,
      32: 8
    };
    return pools.slice(0,poolDivs[numPlayers]);
  } else {
    return ['A'];
  }
}
