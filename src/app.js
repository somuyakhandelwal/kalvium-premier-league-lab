//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var manager = [managerName,managerAge,currentTeam,trophiesWon];
  return manager;
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

function createFormation( [defender, midfield, forward]){
  if(defender == undefined || midfield == undefined ){
    return null;
  }
    var position = {
      defender:defender,
      midfield:midfield,
      forward:forward
    }
    return position;
  }

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var debutYear = players.filter(function(player) {
    return player.debut == year;
  });
  return debutYear;
}


//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  var positions = players.filter(function(player) {
    return player.position == position;
  });
  return positions;
  
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardname){
  let award = [];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name == awardname){
        award.push(players[i])
      }
    }
  }
  return award;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award, noOfTimes) {
  let arr1 = [];
  players.some((player) => {
    let awardCount = 0;
    player.awards.some((playerAward) => {
      if (playerAward.name === award) {
        awardCount += 1;
      }
    });
    if (awardCount === parseInt(noOfTimes)) arr1.push(player);
  });
  return arr1;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country){
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(function(player) {
     return player.country == country;
    })
  return data;


}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var data = players.filter(function(players){
    return players.age<age && players.team == team && players.awards.length>=noOfAwards;
  })
  return data;

}
//Progression 9 - Sort players in descending order of their age

function sortAge(){
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function playersSortAwards(){
  let count = 0;
  let filteredPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      filteredPlayers[count++] = players[i];
    }
  }
  for (let i = 0; i < filteredPlayers.length; i++) {
    for (let j = i + 1; j < filteredPlayers.length; j++) {
      if (filteredPlayers[i].awards.length < filteredPlayers[j].awards.length) {
        let temp = filteredPlayers[i];
        filteredPlayers[i] = filteredPlayers[j];
        filteredPlayers[j] = temp;
      }
    }
  }
  return filteredPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function namexAwardxTimes(award, count, country) {
  let arr = players.filter((player) => {
    let awardCount = 0;
    for (let playerAward of player.awards) {
      if (playerAward.name === award) {
        awardCount++;
      }
    }
    return awardCount === parseInt(count) && player.country === country;
  });

  return arr.sort((a, b) => a.name.localeCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function namexOlderThan(age) {
  let arr = players.filter((player) => player.age >= parseInt(age)).map((player) => (
    {...player,awards: [...player.awards].sort((a, b) => b.year - a.year),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return arr;
}