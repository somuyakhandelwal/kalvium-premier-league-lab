function compareAwardsByYearDesc(a, b) {
  return b.year - a.year;
}

//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let manager = {
    name: managerName,
    age: managerAge,
    team: currentTeam,
    trophies: trophiesWon,
  };
  return [manager];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formationArray) {
  if (formationArray.length !== 3) {
    return null; // Return null for invalid input
  }

  let formation = {
    defender: formationArray[0],
    midfield: formationArray[1],
    forward: formationArray[2],
  };
  return formation;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  return players.filter((player) => player.debut === year);
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  return players.filter((player) => player.position === position);
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  return players.filter((player) =>
    player.awards.some((award) => award.name === awardName)
  );
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(
    (player) =>
      player.awards.filter((award) => award.name === awardName).length ===
      noOfTimes
  );
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardAndCountry(awardName, country) {
  return players.filter(
    (player) =>
      player.awards.some((award) => award.name === awardName) &&
      player.country === country
  );
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(
    (player) =>
      player.awards.length >= noOfAwards &&
      player.team === team &&
      player.age < age
  );
}

//Progression 9 - Sort players in descending order of their age

function sortByAgeDescending() {
  return players.slice().sort((a, b) => b.age - a.age);
}


//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function sortByAwardsDescending(team) {
  return players
    .filter((player) => player.team === team)
    .sort((a, b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function sortByNamexAwardxTimes(awardName, noOfTimes, country) {
  let filteredPlayers = filterByAwardxTimes(awardName, noOfTimes);
  filteredPlayers = filteredPlayers.filter(
    (player) => player.country === country
  );
  return filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function sortByNamexOlderThan(age) {
  let filteredPlayers = players.filter((player) => player.age > age);
  filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
  filteredPlayers.forEach((player) => {
    player.awards.sort(compareAwardsByYearDesc);
  });
  return filteredPlayers;
}