class Vehicle {
    constructor(color, model, type) {
        this.color = color;
        this.model = model;
        this.type = type;
    }

    display() {
        return `${this.type} : ${this.color} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(color, model) {
        super(color, model, "car");
    }

    lock() {
        return `Your ${this.color} ${this.model} is now locked!`
    }
}

class Motorcycle extends Vehicle {
    constructor(color, model) {
        super(color, model, "motorcycle");
    }

    lock() {
        return `Your ${this.color} ${this.model} is now locked!`
    }
}




const vehicle = new Vehicle("blue", "VW Beetle", "car");
const car = new Car("black", "honda");
const motorcycle = new Motorcycle("green", "Yamaha");
const myHonda = new Car("black", "honda");

console.log(vehicle.display());
console.log(car.display());
console.log(motorcycle.display());
console.log(myHonda.lock());
console.log(motorcycle.lock());