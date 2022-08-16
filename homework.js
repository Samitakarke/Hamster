class Hamster
{
   constructor(_owner=' ',_name, _price=15) 
   {
    this.owner =_owner;
    this.name= _name;
    this.price = _price;

   }



   wheelRun()
   {
        console.log("squeak squeak");
   }

   eatFood()
   {
        console.log("nibble nibble");
   }

   getPrice()
   {
        return this.price;
   }
}

const myhamster= new Hamster();
myhamster.eatFood();
let hamsterPrice =myhamster.getPrice();
myhamster.wheelRun();
console.log(hamsterPrice);

class Person
{
     constructor(name,age=0,height=0,weight=0,mood=0,hamster=[],bankAccount=0)
     {
          this.name= name;
          this.age= age;
          this.height= height;
          this.weight= weight;
          this.mood=mood;
          this.hamster=hamster;
          this.bankAccount= bankAccount;

     }

      getName()
      {
          return this.name;
      }

     getAge()
     {
          return this.age;
     }

     getWeight()
     {
          return this.weight;
     }

     greet()
     {
          console.log(`Hello ${this.name}`);
     }

     eat()
     {
          this.weight++;
          this.mood++;
          return(this.weight + this.mood);
     }

     exercise()
     {
          this.weight--;
          return this.weight;
     }

     ageUp()
     {
          this.age++;
          this.height++;
          this.weight++
          this.mood--;
          this.bankAccount = this.bankAccount + 10;
          // return (this.age++ +" " +this.height++ +" "+ this.weight++ +" " +this.mood-- + " "+ this.bankAccount);
          return(this.age + " " + this.height + " " + this.weight + " " + this.mood + " " + this.bankAccount)
          
     }

     buyHamster(hamster)
     {
         hamster.push(myhamster);
         this.mood= this.mood + 10;
         this.bankAccount= this.bankAccount - getPrice();

     }

}
const timmy= new Person('Timmy');

// Increasing age to 5, eat five times and have him exercise five times
while(timmy.age < 5)
{
     timmy.ageUp();
     timmy.eat();
     timmy.exercise();

}

//Increasing age from 5 to 9,
while(timmy.age < 9)
{
     timmy.ageUp();
}

myhamster.owner ='Timmy';
while(timmy.age <15)
{
     timmy.ageUp();
}
for(let i=0;i<2;i++)
{
     timmy.eat();
     timmy.exercise();
}

class Dinner
{
     constructor (appetizer,entree,dessert)
     {
          this.appetizer = appetizer;
          this.entree = entree;
          this.dessert = dessert;

     }

}
class chef
{
     constructor(factoryType)
     {
          this.factoryType = factoryType;
          this.dinnerCollection = [];
     }

     makeNewDinner(appetizer,entree,dessert)
     {
          const newDinner = new Dinner(appetizer,entree,dessert);
          this.dinnerCollection = []
     }

     printDinner()
     {
          for (let dinner of this.dinnerCollection)
          {
               console.log(dinner);
          }
     }
}

let happyDinner = new chef();


happyDinner.makeNewDinner('wings','rib eye','sugar cookie');
happyDinner.makeNewDinner('cheese dip', 'grilled chicken','cheesecake');
happyDinner.makeNewDinner('mozzarella stick', 'marinated pork', 'vanilla ice cream');

