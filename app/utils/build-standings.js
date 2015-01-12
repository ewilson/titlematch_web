export default function buildStandings(players, matches) {
  var standings = new Standings(players);
  matches.forEach(function(match) {
    standings.addMatch(match);
  });
  return standings.display();
}

function Standings(players) {
  var that = this;
  this.standings = {};
  players.forEach(function(player) {
    that.standings[player.get('id')] = {
      name: player.get('name'),
      wins: 0,
      losses: 0,
      ties: 0,
      pf: 0,
      pa: 0,
      pm: 0
    };
  });
}

Standings.prototype = {
  constructor: Standings,
  addMatch: function(match) {
    var homePlayerId = match.get('homePlayer').get('id');
    var awayPlayerId = match.get('awayPlayer').get('id');
    if (match.get('homeWinner')) {
      this.standings[homePlayerId].wins += 1;
      this.standings[awayPlayerId].losses += 1;
    } else if (match.get('awayWinner')) {
      this.standings[homePlayerId].losses += 1;
      this.standings[awayPlayerId].wins += 1;
    } else {
      this.standings[homePlayerId].ties += 1;
      this.standings[awayPlayerId].ties += 1;
    }
    var homeScore = match.get('homeScore');
    var awayScore = match.get('awayScore');
    this.standings[homePlayerId].pf += homeScore;
    this.standings[homePlayerId].pa += awayScore;
    this.standings[awayPlayerId].pf += awayScore;
    this.standings[awayPlayerId].pa += homeScore;
    this.standings[homePlayerId].pm += homeScore - awayScore;
    this.standings[awayPlayerId].pm += awayScore - homeScore;
  },

  display: function() {
    var displayStandings = [];
    for (var o in this.standings) {
      var row = this.standings[o];
      row.perc = (row.wins + row.ties/2) / (row.wins + row.losses + row.ties);
      row.perc = isNaN(row.perc) ? '-' : row.perc.toFixed(3);
      displayStandings.push(row);
    }
    displayStandings.sort(function(x,y) {
      if (x.perc === y.perc) {
        return x.pm < y.pm;
      }
      return x.perc < y.perc;
    });
    return displayStandings;
  }
};
