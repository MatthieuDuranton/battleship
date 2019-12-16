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
let position
let boat
let choice
let boatname


//pour défninir la position verticale ou horizontale du bateau
document.getElementById("turn").addEventListener("click", ()=>{
   if (turn == 1){
      turn = 2
   }else if (turn == 2){
      turn = 1
   }else{
      turn = 1//initialiser turn à 1
   }

   if (turn == 1){
      position = "Horizontal"
   }else if (turn == 2){
      position = "Vertical"
   }
   document.getElementById("action").innerHTML = position;
   return turn//toujours placer le return en fin de fonction car il la stoppe
});

//pour déterminer quel bateau placer
document.getElementById("select").addEventListener("click", ()=>{
   if (choice>=1 && choice<5){
      choice++
   }else{
      choice = 1//initialiser choice à 1, revenir à 1 après 5
   }
   
   if (choice == 1){
      boatname = "Submarine";
   }else if (choice == 2){
      boatname = "Tanker";
   }else if (choice == 3){
      boatname = "Destroyer";
   }else if (choice == 4){
      boatname = "Dreadnought";
   }else if (choice == 5){
      boatname = "Carrier";
   }
   document.getElementById("boatname").innerHTML = boatname;
   return choice
});

//Placer le bateau choisit à la bonne position sur la grille où elle est cliquée
canvas.addEventListener("click",  () => {
   if (choice == 1){
      boat = new Boat (2, turn,);
   }else if (choice == 2){
      boat = new Boat (3, turn);
   }else if (choice == 3){
      boat = new Boat (3, turn);
   }else if (choice == 4){
      boat = new Boat (4, turn);
   }else if (choice == 5){
      boat = new Boat (5, turn);
   }

   console.log(boat, choice, turn)
    
    boat.boatInitialize();
})


    


    


    


    

