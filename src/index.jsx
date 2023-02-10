class animal {
    constructor(type){
        this.type=type;
    }
    getDogType=()=>{
        console.log(this.type)
    }
}


const a = new animal('dog')

a.getDogType