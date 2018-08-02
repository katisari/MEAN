function Human(name) {
    this.name = name
}



function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function() {
        console.log(this.name);
    return this;
    }
    this.showStats = function() {
    console.log("Name is " + this.name + ". Health is " + this.health
                    + ". Speed is " + speed + ". Strength is " + strength);
    return this;
    }
    this.drinkSake = function() {
    this.health += 10;
    return this;
    }
    this.punch = function(ninja_obj) {
        if ((this instanceof Ninja) && (ninja_obj instanceof Ninja)) {
            ninja_obj.health -= 5
            console.log(ninja_obj.name + " was punched by " + this.name+ " and lost 5 Health!")
            return this
        }
        console.log("Not a Ninja")
    }
    this.kick = function(ninja_obj) {
        if ((this instanceof Ninja) && (ninja_obj instanceof Ninja)) {
            ninja_obj.health -= strength * 15
            console.log(ninja_obj.name + " was kicked by " + this.name + " and lost " + (strength * 15) + " point of strength")
            return this
        }
        console.log("Not a Ninja")
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Human("Bill Gates");
blueNinja.punch(redNinja);



// Ninja Class III

class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Name: " + this.name);
        return this;
    }
    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health, ", Speed: " + this.speed + ",Strength: " + this.strength)
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.")
    return this;
  }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
