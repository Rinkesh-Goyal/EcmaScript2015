export default class User{
    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }
}

export function sayHello(){
    console.log("Hello");
}