class City {
    constructor(name, country, population) {
        this.name = name;
        this.country = country;
        this.population = population;
    }

    printInfo() {
return `${this.name} is a city in ${this.country} that has ${this.population} inhabitants.`
    }
}

const berlin = new City('Berlin', 'Germany', '1000');
const milan = new City('Milan', 'Italy', '2000');

console.log(berlin.printInfo())
console.log(milan.printInfo())