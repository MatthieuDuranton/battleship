//initialiser Canvas pour poser la grid
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

const board = new Grid (10, 30);//appeler la grid, nombre de lignes/colonnes et taille des cellules
canvas.width = board.number * board.size;//définir largeur canvas
canvas.height = board.number * board.size;

//appeler la grid selon les 2 étapes définies dans le constructor
board.gridInitialize()
board.gridDisplay()

//variables utilisées
let turn//position verticale ou horizontale
let boat
let choice//choix du bateau à poser
let boatname//nom du bateau
let nbr = 5//nbre de bateaux à placer
let l1 = 1//nbre de fois que l'on peut placer un ss marin
let l2 = 1//idem tanker
let l3 = 1
let l4 = 1
let l5 = 1
let x//position souris axe des x
let y//position souris axe des y
let size//taille du bateau sélectionné
let overlap = false//vérifier que les bateaux ne se superposent pas
let remove = false
let action = 1//variable pour savoir si on on veut ajouter ou retirer un bateau




//pour défninir la position verticale ou horizontale du bateau
document.getElementById("turn").addEventListener("click", ()=>{
   if (turn == 1){
      turn = 2
   }else if (turn == 2){
      turn = 1
   }else{
      turn = 1//initialiser turn à 1
   }
   let position
   if (turn == 1){
      position = "Horizontal"
   }else if (turn == 2){
      position = "Vertical"
   }
   document.getElementById("action").innerHTML = position;
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
      size = 2
   }else if (choice == 2){
      boatname = "Tanker";
      size = 3
   }else if (choice == 3){
      boatname = "Destroyer";
      size = 3
   }else if (choice == 4){
      boatname = "Dreadnought";
      size = 4
   }else if (choice == 5){
      boatname = "Carrier";
      size = 5
   }
   document.getElementById("boatname").innerHTML = boatname;
});

//reconnaitre un bateau
document.getElementById("remove").addEventListener("click", ()=>{
   action = 2
});


//Placer le bateau choisi à la bonne position sur la grille où elle est cliquée
canvas.addEventListener("click",  () => {

   //Prendre la position de la souris et arrondir à l'entier inférieur
   //pour définir dans quelle case elle se trouve
   x =  Math.floor(event.clientX / board.size - 0.2);
   y = Math.floor(event.clientY / board.size - 0.2);

   //pour ajouter un bateau
   if (action == 1){
   console.log(action)

      //vérifier que les bateaux ne se superposent pas
      for (let i = 0; i<size; i++){
         if ((turn == 1) && (board.grid[y][x+i] == 1) || (turn == 2) && (board.grid[y+i][x] == 1)){
            overlap = true
         }
      }
      if (overlap == true){
         document.getElementById("boatname").innerHTML = "Boats can't overlap one another, place it elsewhere"
         overlap = false
      }else{
         //vérifier que le bateau reste dans les limites de la map
         if ((turn == 1 && (x + size) <= 10) || (turn == 2 && (y + size) <= 10)){
            if (choice == 1){
               l1--
                  if(l1>=0){//vérifier que le sous marin n'a pas été déjà placé
                     boat = new Boat(size, turn, nbr)//déclaration du ss marin
                     boat.boatInitialize()//création du bateau déclaré
                  }else{
                     document.getElementById("boatname").innerHTML = "Boat already on war, pick another-one"
                  }
            }else if (choice == 2){
               l2--
                  if(l2>=0){
                     boat = new Boat (size, turn, nbr);
                     boat.boatInitialize();
                  }else{
                     document.getElementById("boatname").innerHTML = "Boat already on war, pick another-one"
                  }
            }else if (choice == 3){
               l3--
                  if(l3>=0){
                     boat = new Boat (size, turn, nbr);
                     boat.boatInitialize();
                  }else{
                     document.getElementById("boatname").innerHTML = "Boat already on war, pick another-one"
                  }
            }else if (choice == 4){
               l4--
                  if(l4>=0){
                     boat = new Boat (size, turn, nbr);
                     boat.boatInitialize();
                  }else{
                     document.getElementById("boatname").innerHTML = "Boat already on war, pick another-one"
                  }
            }else if (choice == 5){
               l5--
                  if(l5>=0){
                     boat = new Boat (size, turn, nbr);
                     boat.boatInitialize();
                  }else{
                     document.getElementById("boatname").innerHTML = "Boat already on war, pick another-one"
                  }
            }
         }else{
            document.getElementById("boatname").innerHTML = "Boat won't fit in the grid, place it elsewhere"
         }
      }

   //vérifier si un bateau se trouve sur la case cliquée
   }else if (action == 2){
      for (i=0; i<boatsPosition.length; i++){
         //existe t'il un x dans les arrays des bateaux équivalent à celui cliqué
         if (boatsPosition[i][1] == x){
            //existe t'il un y équivalent à celui cliqué lié au x
            if (boatsPosition[i][2] == y){
               remove = true
            }
         }
      }
      if(remove == true){
         console.log("touché")
         board.grid[y][x] = 0
      }else{
         console.log("dans l'eau")
      }
      remove = false
      action = 1//revenir en mode pose de bateaux
      console.log(board.grid);
      board.gridDisplay()
   }   
})


    


    


    


    

