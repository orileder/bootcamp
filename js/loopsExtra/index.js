const Map1 =  [[0, 2, 0], [1, 3, 0], [0, 2, 0]]
var playerLocation = {x: 1, y: 0}
function movePlayer(gameMap, Location, direction) {
    var numRows = gameMap.length
    var numCols = gameMap[0].length
    if (direction === 'north'){
        if (Location.y === 0 ){
           console.log ('you are on the edge of the map!') 
        }
        else {
            Location.y --
        }
    }
    else if (direction === 'south'){
        if (Location.y === (numRows-1) ){
           console.log ('you are on the edge of the map!');
        }
        else {
            Location.y ++
        }
    }
    else if (direction === 'east'){
        if (Location.x === (numCols-1) ){
           console.log ('you are on the edge of the map!') 
        }
        else {
            Location.x ++
        }
    }
    else if (direction === 'west'){
        if (Location.x === 0 ){
           console.log ('you are on the edge of the map!') 
        }
        else {
            Location.x --
        }
    }

    return (Location)
}
console.log(movePlayer(Map1 , playerLocation , 'north' ))
