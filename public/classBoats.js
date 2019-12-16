class Boat {
    constructor(size, position){
        this.size = size
        this.position = position
    }
    boatInitialize(){
        //Prendre la position de la souris et arrondir à l'entier inférieur
        //pour définir dans quelle case elle se trouve
        const x =  Math.floor(event.clientX / board.size - 0.2);
        const y = Math.floor(event.clientY / board.size - 0.2);
        if (this.position == 1){
            for (let i=0; i<this.size; i++){
                board.grid[y][x+i] = 1;//construire le bateau sur l'axe des x
                board.gridDisplay()//appeler la grille corrigée
            }
        }else if (this.position == 2){
            for (let i=0; i<this.size; i++){
                board.grid[y+i][x] = 1;
                board.gridDisplay()//appeler la grille corrigée
            }
        }
        console.log(board.grid);
    }
}
