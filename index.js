function dwarfRollCall(dwarves) {
  var dwarfString = [];
  for (let i=0; i<dwarves.length; i++) {
    dwarfString.push(`${i+1}. ${dwarves[i]} `)
  }
  return `${dwarfString.join("")}`
}
dwarfRollCall()


function summonCaptainPlanet(planeteerCalls) {
  var planeteerString = [];
  for (let i=0; i<planeteerCalls.length; i++) {
  planeteerString.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return planeteerString
}
summonCaptainPlanet()


function longPlaneteerCalls(words){
  for(let i=0; i<words.length; i++) {
    if (words[i].length>4){
      return true
    } else {
    return false
    }
  }
}
longPlaneteerCalls()


function findTheCheese(foods) {
  for(let i=0; i<foods.length; i++){
    if (foods[i]==="cheddar"||foods[i]==="gouda"||foods[i]==="camembert"){
    return foods[i]
    }
  }
  return "no cheese!"
}

