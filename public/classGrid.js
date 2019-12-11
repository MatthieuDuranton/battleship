class Grid {
    constructor(number, size) {
        this.number = number;
        this.grid = [];
        this.size = size;
    };
    gridInitialize(){
        for (let y=0; y<this.number; y++){
            const array = [];
            this.grid.push(array);
            for (let x=0; x<this.number; x++){
                array.push(0);
            }
        }
        console.log(this.grid);
    };
    gridDisplay(){
        this.grid.forEach ((array, y) => {
            array.forEach ((number, x) => {
            ctx.strokeStyle = "black";
            ctx.strokeRect(x*this.size, y*this.size, this.size, this.size)   
            })
        })         
    }
};
