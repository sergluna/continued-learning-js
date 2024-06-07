/* We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

// My solution below but above uses destructuring
// players1 = [game.players[0]];
// players2 = [game.players[1]];

const [gk, ...fieldPlayers] = players1;
// Below was my solution but after destructuring on Line 63, line 69 is possible
// const [gk, ...fieldPlayers] = game.players[0];

// All PLayers
const allPlayers = [...players1, ...players2];
// Same as above my solution becomes a little more simpler after line 63
// allPLayers = [...game.players[0], ...game.players[1]];

// Team 1 Subsititutions
const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
// Same situation as above
// playersFinal = [...game.players[0], "Thiago", "Coutinho", "Perisic"];

// Team Odds
const {
  odds: { team1, x: draw, team2 },
} = game;
// much better code compared to mine, destructuring is powerful
// team1Odds = game.odds.team1;
// team2Odds = game.odds.team2;
// drawOdds = game.odds.x;

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were score`);
};
// The solution utilizes spread in a cool way
// const printGoals = function (players, score) {
//   console.log(players);
//   console.log(score);
// };

console.log(players1);
console.log(players2);
console.log(gk);
console.log(fieldPlayers);
console.log(allPlayers);
console.log(playersFinal);

printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
