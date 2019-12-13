class Boat {
    constructor(size, position){
        this.size = size
        this.position = position
    }
    boatInitialize(){
            const x =  Math.floor(event.clientX / board.size - 0.2);
            const y = Math.floor(event.clientY / board.size - 0.2);
            if (this.position == 1){
                console.log(this)
                for (let i=0; i<this.size; i++){
                    board.grid[y][x+i] = 1;
                    board.gridDisplay()
                }
            }else if (this.position == 2){
                console.log(this)
                for (let i=0; i<this.size; i++){
                    board.grid[y+i][x] = 1;
                    board.gridDisplay()
                }
            }
            console.log(board.grid);
            canvas.re
    }
}
