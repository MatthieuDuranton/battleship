class Grid {
    constructor(number, size) {
        this.number = number;//row & col nbr
        this.grid = [];//grid is an array
        this.size = size;//cell size
    };
    gridInitialize(){
        for (let y=0; y<this.number; y++){
            const array = [];
            this.grid.push(array);//rows construction
            for (let x=0; x<this.number; x++){
                array.push(0);//colomns construction
            }
        }
    };
    gridDisplay(){
        this.grid.forEach ((array, y) => {
            array.forEach ((number, x) => {
                ctx.strokeStyle = "black";
                ctx.strokeRect(x*this.size, y*this.size, this.size, this.size);
                        if (this.grid[y][x] == 1){
                            ctx.fillStyle = "black";
                            ctx.fillRect(x*board.size, y*board.size, board.size, board.size);
                        }
                    
                
            })
        })         
    }
};
