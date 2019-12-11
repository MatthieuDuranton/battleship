//initialiser Canvas pour poser la grid
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

const grid = new Grid (10, 30);//appeler la grid, nombre de lignes/colonnes et taille des cellules
ctx.fillStyle = "gold";
ctx.fillRect(0, 0, grid.number * grid.size, grid.number * grid.size);
// canvas.width = grid.number * grid.size;//définir largeur canvas
// canvas.height = grid.number * grid.size;

//appeler la grid selon les 2 étapes définies dans le constructor
grid.gridInitialize()
grid.gridDisplay()

//MOdifier grid selon le positionnement de la souri sur le canvas
//capturer le positionnement de la souri sur le canvas
canvas.addEventListener("click", () => {
    //définir la cell selon les positions
    const x =  Math.floor(event.clientX / grid.size - 0.2);
    const y = Math.floor(event.clientY / grid.size - 0.2    );
    console.log(x);
    console.log(y);

});


