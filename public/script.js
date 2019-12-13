//initialiser Canvas pour poser la grid
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

const board = new Grid (10, 30);//appeler la grid, nombre de lignes/colonnes et taille des cellules
canvas.width = board.number * board.size;//définir largeur canvas
canvas.height = board.number * board.size;

//appeler la grid selon les 2 étapes définies dans le constructor
board.gridInitialize()
board.gridDisplay()

let turn
let boat
let choice
let boatname
let submarine
let destroyer
let tanker
let dreadnought
let carrier

document.getElementById("turn").addEventListener("click", ()=>{
   if (turn == 1){
      turn = 2
      document.getElementById("action").innerHTML = "Vertical";
   }else if (turn == 2){
      turn = 1
      document.getElementById("action").innerHTML = "Horizontal";
   }else{
      turn = 1
   }
   return turn
});


document.getElementById("select").addEventListener("click", ()=>{
   if (choice>=1 && choice<5){
      choice++
   }else{
      choice = 1
   }

   if (choice == 1){
      boat = submarine;
      boatname = "Submarine";
   }else if (choice == 2){
      boat = tanker;
      boatname = "Tanker";
   }else if (choice == 3){
      boat = destroyer;
      boatname = "Destroyer";
   }else if (choice == 4){
      boat = dreadnought;
      boatname = "Dreadnought";
   }else if (choice == 5){
      boat = carrier;
      boatname = "Carrier";
   }
   document.getElementById("boatname").innerHTML = boatname;
   return boat
});






document.getElementById("boatname").innerHTML = boatname;
canvas.addEventListener("click",  () => {
submarine = new Boat (2, turn,);
destroyer = new Boat (3, turn);
tanker = new Boat (3, turn);
dreadnought = new Boat (4, turn);
carrier = new Boat (5, turn)

   console.log(boat)
    
    boat.boatInitialize();
})


    


    


    


    

