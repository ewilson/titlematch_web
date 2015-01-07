/**
 * This function is best understood with a picture. Imagine if 5 players
 * were having a round robin at chess. One player (A) never moves, while the
 * others rotate, treating the empty seat like a player:
 *
 * A-     A-B    A-C    A-D    A-E
 * B-E    C-     D-B    E-C     -D
 * C-D    D-E    E-      -B    B-C
 *
 * This arrangement accomplishes a round-robin that maximizes simultaneous play.
 */
export default function roundRobin(competitors) {
  var schedule = [];
  if (competitors.length % 2 === 1) {
    competitors.push("BYE");
  }
  var spots = competitors.length;
  for (var round = 1; round < spots; round++) {
    // a round schedules all players for one match except possible one with a BYE
    for (var idx = 0; idx < spots/2; idx++) {
      var match = [competitors[idx], competitors[spots-idx-1]];
      if (match.indexOf("BYE") === -1) {
        schedule.push(match);
      }
    }
    // This rotates all competitors except first (including BYE)
    var shift = competitors.splice(1, 1);
    competitors.push(shift[0]);
  }
  return schedule;
}