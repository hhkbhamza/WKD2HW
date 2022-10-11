class Cat{
    constructor(name,color,age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    getName() {
        return this.name
    }
    getColor() {
        return this.color
    }
    getAge() {
        return this.age
    }
}
const kitten = new Cat("Oreo", "Orange", 1)
const c1 = new Cat("Andy", "Grey", 4)

console.log(kitten)
console.log(c1)

console.log(kitten.getName())
console.log(c1.getName())

console.log(kitten.getColor())
console.log(c1.getColor())

console.log(kitten.getAge())
console.log(c1.getAge())



class Pirate {
    constructor(name, strength, gold) {
        this.name = name
        this.strength = strength
        this.gold = gold
    }
    getNames() {
        return this.name
    }
    getStrength() {
        return "we all have " +this.strength
    }
    getGold() {
        return this.gold
    }
}
const jollyRoger = new Pirate(["blackBeard", "brownBeard", "redBeard"], "strong ships", 10000)
// console.log(jollyRoger)

const blackPearl = new Pirate(["greenBeard", "pinkBeard", "blueBeard"], "gold canons", 100)
// console.log(blackPearl)

// console.log(jollyRoger.getNames())
// console.log(blackPearl.getNames())


// console.log(jollyRoger.getStrength())
// console.log(blackPearl.getStrength())

// console.log(jollyRoger.getGold())
// console.log(blackPearl.getGold())


// for(const element of jollyRoger.name){
//     console.log(element)
// }




console.log(jollyRoger)
console.log(blackPearl)



for(let i = 0;i< 1;i++) {
    console.log(jollyRoger.getStrength())
    console.log(blackPearl.getStrength())
}