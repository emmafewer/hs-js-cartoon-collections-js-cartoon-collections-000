
function dwarfRollCall(dwarves) {
  var dwarfArray = [];
  for (let i=0; i<dwarves.length; i++) {
    dwarfArray.push(`${i+1}. ${dwarves[i]} `)
  }
  return `${dwarfArray.join("")}`
}



function summonCaptainPlanet(planeteerCalls) {
  var callsArray = [];
  for (let i=0; i<planeteerCalls.length; i++) {
  callsArray.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return callsArray
}



function longPlaneteerCalls(words){
  for(let i=0; i<words.length; i++) {
     return (words.length>4) ? true : false;
  }
}



function findTheCheese(foods) {
  for(let i=0; i<foods.length; i++){
   switch (foods[i]) {
     case "gouda":
       return foods[i]
     case "cheddar":
       return foods[i]
     case "camembert":
       return foods[i]
    default:
       return "no cheese"
   }
  }
}





























