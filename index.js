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