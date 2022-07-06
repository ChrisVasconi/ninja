class Ninja {
    constructor(firstName, health, strength, speed ) { //Constructor is the function
        this.firstName = firstName
        this.health = health
        this.strength = strength
        this.speed = speed
    }
    showName(){
        console.log('Name is', this.firstName )
    }
    showAttributes(){
        console.log('Health is', this.health ,'Strength is', this.strength ,'Speed is', this.speed, )
    }
    drinkSake(){
        console.log(this.firstName, " HP is :", this.health)
        this.health+=10;
        console.log(this.firstName, " Drank Sake! ")
        console.log(this.firstName, " New HP is :", this.health)
    }
}



const ninjaOne = new Ninja('Chris', 100, 3, 3);
ninjaOne.showName();
ninjaOne.showAttributes();
ninjaOne.drinkSake();
console.log(ninjaOne.health)