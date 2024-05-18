import { Person1 } from "./Person1";

export function promote() {
    Category: "Movie",
    
}


export default class Teacher extends Person1 {
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("Teach");
    }
}


