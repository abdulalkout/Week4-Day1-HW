// Firstgit 

class Hamster {
    constructor(owner = '', name){
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }

    wheelRun(){
        console.log('squeak squeak')
    }

    eatFood(){
        console.log('nibble nibble')
    }

    getPrice(){
        return this.price
    }
}


class Person {
    constructor(name, age=0, height=0, weight=0, mood, hamsters=[], bankAccount){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood || 0;
        this.hamsters = hamsters
        this.bankAccount = bankAccount || 0;
    }


    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        console.log(`This is ${this.name}`);
    }

    eat(){
        this.weight++;
        this.mood++;
    }

    exercise(){
        this.weight--;
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+= 10;
    }

    buyHamster(hamusterName){
        let newHamuster = new Hamster(this.name, hamusterName)
        this.hamsters.push(newHamuster);
        this.mood+= 10;
        const hamsterPrice = newHamuster.getPrice();
        this.bankAccount = this.bankAccount - hamsterPrice;
    }
}


const timmy = new Person('Timmy', 5)
for(let i=1; i<=5; i++) {
    timmy.eat();
    timmy.exercise();
}
timmy.age = 9;
console.log(timmy)


const gus = new Hamster("Timmy", "Gus")

timmy.buyHamster("Gus")
timmy.age =15;
for(let i=1; i<=2; i++) {
    timmy.eat();
    timmy.exercise();
}
console.log(timmy)



//------------------------------Chef Make Dinners---------------------------------//

class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    constructor(name, dinnerArray=[]){
        this.name = name;
        this.dinnerArray = dinnerArray;
    }

    cookDinner(appetizer, entree, dessert){
        const newDinner = new Dinner(appetizer, entree, dessert)
        this.dinnerArray.push(newDinner);
        return newDinner;
    }

}


console.log('---------------------Q2-----------------------')
const abdul = new Chef('Abdul')
abdul.cookDinner('Stuffed Mushrooms', 'Checken', 'Ice Cream')
abdul.cookDinner('Jalapeño Poppers', 'beef', 'cake')
abdul.cookDinner('Caprese Skewers', 'Ramin', 'cake')

// console.log(abdul)

console.log(abdul.dinnerArray.forEach(dinner => {
    console.log(dinner)
}))