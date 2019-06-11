

function getRandomInt() {
    return Math.floor(Math.random()*4);
}

function initPlayers() {
    let players = []
    players[1] = {
      name: "Francesca",
      score: 0,
    }
    return players
}
function SetStateOccupied() {
if (!IsOccupied()){
    console.log("La cella è occupata!");}
}

function SetStateFree () {
var cell=[];    
for (let i=0; i<6; i++)
{
    for (let j=0; j<6; j++)
    {
        if(cell[i]=="" && cell[j]=="")
        return true;
    }
}
}

function IsOccupied () {
    var cell=[]; 
    for (let i=0; i<6; i++)
    {
        for (let j=0; j<6; j++)
        {
            if(cell[i]!="" && cell[j]!="")
            return false;
        }
    }
}

function initGrid() {
 let table = document.getElementById("table")
  let cells = []
  for(let i = 0; i < 6; i++) {
  let row = document.createElement("tr")
  for(let j = 0; j < 6; j++) {
  let cell =  document.createElement("td")
   cell.id = i * 6 + j + 1
   row.appendChild(cell)
   cells.push(cell)
   }
   table.appendChild(row);
   }
   return cells
   }
var players = initPlayers()
initGrid();

class BasePiece
{
    constructor(ui) {
        putOnGrid() 
    }
     
    
}

