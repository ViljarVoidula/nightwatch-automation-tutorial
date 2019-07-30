/*
There are no "real" classes in Javascript!! Javascript class keyword is syntatic sugar over prototype. 
Remember that - do not expect exactly same behaviour you meet in other Object oriented languages!
*/

class Car {
    constructor(brand, maxSpeed, owner, type){
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.type = type || 'HATCHBACK';
        this.owner = owner;
    }

    logInfo(){
        return console.log(`This ${this.brand} is owned by ${this.owner}.`)
    }
}

// const toyota = new Car()



class Truck extends Car {
    constructor(brand, maxSpeed, owner, color){
        super(brand,maxSpeed, owner);
        this.type = 'TRUCK'
        this.color = color;
    }

    logInfo(){
        return console.log(`This ${this.brand} is owned by ${this.owner} and its ${this.color}.`)
    }
}

// const newTruck = new Truck('Ford', 30, 'Marcus', 'red');

// console.log(newTruck);
// newTruck.logInfo();


module.exports = Truck;