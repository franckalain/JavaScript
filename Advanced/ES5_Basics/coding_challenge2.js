var jonhTeam = 'John Team';
var mikeTeam = 'Mike Team';

var johnTeamScoreGame1 = 90;
var johnTeamScoreGame2 = 120;
var johnTeamScoreGame3 =  103;

var mikeTeamScoreGame1 = 116;
var mikeTeamScoreGame2 = 94;
var mikeTeamScoreGame3 = 103;

var johnTeamAverage = (johnTeamScoreGame1 + johnTeamScoreGame2 + johnTeamScoreGame3) / 3;
var mikeTeamAverage = (mikeTeamScoreGame1 + mikeTeamScoreGame2 + mikeTeamScoreGame3) / 3;
console.log(`the John's team average is ` + johnTeamAverage);
console.log(`the mike's team average is ` + mikeTeamAverage);

var heighest = true;
if (heighest = johnTeamAverage > mikeTeamAverage){
    console.log(`the team winner is ` + jonhTeamn);
} else if (heighest = johnTeamAverage < mikeTeamAverage){
    console.log(` the team winner is ` + mikeTeam);
} else {
    console.log(` there is no winner`);
}