class Hero{
    constructor(name, hp, damage){
        this.name=name;
        this.hp=hp;
        this.damage=damage;
    }
    static fly(){
        console.log(`Hero can fly`);
    }
    applyDamage(damage){
        this.hp -= damage;
    }
    attack(enemy){
        enemy.applyDamage(this.damage);
    }
}

class RangedHero extends Hero{
    constructor(name, hp, damage, ranged){
        super(name, hp, damage);
        this.ranged= ranged;
    }
    attack(enemy){
        super.attack(enemy);
        this.hp += this.damage;
    }
}

var heroA= new RangedHero('A', 100, 10, 10);
var heroB= new Hero('B', 200, 5);

console.log(heroA, heroB);
heroA.attack(heroB);
console.log(heroA, heroB);

Hero.fly();
//heroA.fly();// error
Hero.count=0;
console.log( ++Hero.count );