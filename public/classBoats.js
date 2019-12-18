let boatsPosition = []
class Boat {
    constructor(size, position, number){
        this.size = size//taille du bateau
        this.position = position//verticale ou horizontale
        this.number = number//nbre de bateaux à poser
    }
     
    boatInitialize(){
        if (this.number > 1){//Il reste plusieurs bateaux à placer
            if (this.position == 1){
                for (let i=0; i<this.size; i++){
                    board.grid[y][x+i] = 1;//construire le bateau sur l'axe des x
                    board.gridDisplay()//appeler la grille corrigée
                    // boatsPosition.push([boatname, [y, x+i]])
                    boatsPosition.push([boatname, x+i, y])
                }

            }else if (this.position == 2){
                for (let i=0; i<this.size; i++){
                    board.grid[y+i][x] = 1;
                    board.gridDisplay()
                    boatsPosition.push([boatname, x, y+i])
                }
            }  
        }else if (this.number == 1){//Ne reste plus qu'un bateau à placer
            if (this.position == 1){
                for (let i=0; i<this.size; i++){
                    board.grid[y][x+i] = 1;//construire le bateau sur l'axe des x
                    board.gridDisplay()//appeler la grille corrigée
                    boatsPosition.push([boatname, x+i, y])
                }
            }else if (this.position == 2){
                for (let i=0; i<this.size; i++){
                    board.grid[y+i][x] = 1;
                    board.gridDisplay()
                    boatsPosition.push([boatname, x, y+i])
                }
            }
            document.getElementById("boatname").innerHTML = "Fleet on her way. Ready for war?"
        
        }else if (this.number < 1){//Ne reste plus de bateaux à placer
        document.getElementById("boatname").innerHTML = "Fleet on her way. Ready for war?"
        }
        nbr--
        console.log(board.grid);
        console.log(boatsPosition)
    }
}

