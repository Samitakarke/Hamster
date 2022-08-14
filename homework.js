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
     constructor(Samita,age=0,height=0,weight=0,mood=0,hamster=[],bankAccount=0)
     {
          this.name= Samita;
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
     }

     exercise()
     {
          this.weight--;
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
const newPerson= new Person();


