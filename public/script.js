//initialiser Canvas pour poser la grid
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

const board = new Grid (10, 30);//appeler la grid, nombre de lignes/colonnes et taille des cellules
canvas.width = board.number * board.size;//définir largeur canvas
canvas.height = board.number * board.size;

//appeler la grid selon les 2 étapes définies dans le constructor
board.gridInitialize()
board.gridDisplay()

let boat;
let submarine = new Boat (2, 1);
let destroyer = new Boat (3, 2);
let tanker = new Boat (3, 1);
let dreadnought = new Boat (4, 1);
let carrier = new Boat (5, 1);
let choice = 5;
boatname = "Carrier"
document.getElementById("boatname").innerHTML = boatname;
canvas.addEventListener("click",  () => {
    if (choice == 1){
        boat = submarine;
        boatname = "Ready for war?!!!";
     }else if (choice == 2){
        boat = tanker;
        boatname = "Submarine";
     }else if (choice == 3){
        boat = destroyer;
        boatname = "Tanker";
     }else if (choice == 4){
        boat = dreadnought;
        boatname = "Destroyer";
     }else if (choice == 5){
        boat = carrier;
        boatname = "Dreadnought";
     }else if (choice == 0){
        boatname = "Ready for war?!!!";
        boat = "";
     }else{
         choice = 0;
     }
    document.getElementById("boatname").innerHTML = boatname;
    boat.boatInitialize();
    choice--;
})


    


    


    


    

