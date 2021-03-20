/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*
var country = "turkey";
const continent = "Europasia";
var population = 13;
const isIsland= true;
const language = "english";

var description = country+" is in "+continent+"and its "+population+" M people speak "+language;
var templateliterals = `${country} is in ${continent} and ${population} Million people speak ${language}`
console.log(description);
console.log(templateliterals);
console.log(typeof  isIsland);
console.log(typeof  population);
console.log(typeof  country);
console.log(typeof  language);

console.log("half of turkey population : "+population/2+"Million people");

var population = population+1;
console.log("population: "+population+"Million");

if(population>33){
    console.log(
        `${country}'s population is above avarage`
    );
}
else{
    console.log("Turkey's population "+(33-population)+" Million below avarage");
}
'4'+'5';  //45
'9' - '5'; //4
'19' - '13' + '17'; //617
'19' - '13' + 17; //23
'123' < 57;//false
5 + 6 + '4' + 9 - 4 - 2; //1143


/*const numNeighbours = prompt(
    'How many neighbour countries does your country have?',
    );

    if (numNeighbours == 1) {
        console.log('Only 1 border!');
        } else if (numNeighbours > 1) {
        console.log('More than 1 border');
        } else {
        console.log('No borders');
        }

       

        if(language=="english"&& population<50&&isIsland){
            console.log("You should live in Turkey");
        }
        else{
            console.log("turkey does not meet your criteria");
        }


        switch(language){
            case 'chinese':
            case 'mandorin':
                console.log('Most number of native speaker');
                break;
                case 'spanish':
                    console.log('2nd place in number of native speaker');
                    break;
                    case 'english':
                        console.log('3rd place');
                        break;
                        case 'hindi':
                            console.log('4th');


        }



        console.log(
            `${country}'s population is ${population>33 ? 'above' : 'below'} avarage`,
        );
        
  



        function describeCountry(country,population,capitalCity){
            
            return `${country} has ${population} million people and
            its capital city is ${capitalCity}`;
            }
            
            const descTurkey = describeCountry('Turkey',80,'Ankara');
            const descFinland = describeCountry("Finland",6,"Helsinki");
            const descSweden = describeCountry("Sweden",10,"Stockholm");
            const descPortugal = describeCountry('Portugal', 10,
            'Lisbon');
           
 

            console.log(descPortugal);
            console.log(descFinland);
            console.log(descSweden);
            console.log(descTurkey);


            
           function percentageOfWorld1(population){
               return population/7900*100
           }

           const percentageOfWorld2 = function(population){
            return population/7900*100;
        }

        const percentageOfWorld3 = population =>(population/7900*100);

           var turkeyArrow = percentageOfWorld3(80);
           var germanyPercent = percentageOfWorld2(83);
           var swedenPercent = percentageOfWorld1(10);
           var finlandPercent = percentageOfWorld1(6);
           var turkeyPercent = percentageOfWorld1(80);
           console.log(turkeyPercent,finlandPercent,
            swedenPercent,germanyPercent,turkeyArrow);


           const describePopulation = (country,population) =>
           
 (`${country} has ${population} Million people which is ${percentageOfWorld3(population)}% of the world! `);
               ;


           var desccTurkey = describePopulation("Turkey", 80);
           console.log(desccTurkey);
           var desccSweden = describePopulation("Sweden",10);
           console.log(desccSweden);



           const populations = [80,10,6,83];
           for(let p = 0 ; p< populations.length;p++){
               console.log(populations[p]);
          }
          const percentages = [
            percentageOfWorld1(populations[0]),
            percentageOfWorld1(populations[1]),
            percentageOfWorld1(populations[2]),
            percentageOfWorld1(populations[3])
              
          ];
          console.log(percentages);

          const Neighbours = ["syria","Azerbaijan","armenia","Iraq"];
          Neighbours.push("Utopia");
          console.log(Neighbours);
          Neighbours.pop();
          console.log(Neighbours);

        if(!Neighbours.includes('Germany')){
            console.log("Probably not central european country :D");
        }

        Neighbours[Neighbours.indexOf('Azerbaijan')] = 'Republic of Azerbaijan';
        console.log(Neighbours);



        const myCountry= {
            country: "Turkey",
            capital: "Ankara",
            language: "Turkish",
            population: 80,
            Neighbours: ["Azerbaijan","Armenia","Iraq"],
            describe:function(){
                console.log(`${this.country} ananızı .`);
            },


            checkIsland: function () {
            this.isIsland = !Boolean(this.Neighbours.length);}



        }

        myCountry.population+=2;
        console.log(myCountry.population);
        myCountry['population']-=2;
        console.log(myCountry.population);
        myCountry.describe();
        myCountry.checkIsland();
        console.log(myCountry);

        //for(let voters = 0 ; voters<=50;voters++){
          //  console.log(
            //    `voter number ${voters} is currently voting`
            //);}
       

           const  percentages2 = [];

           for(let g = 0 ; g<populations.length;g++){
               percentages2[g] = percentageOfWorld1(populations[g]);
           }
           console.log(percentages2);

          const  listOfNeighbours =
           [["Canada","Mexico"],['Spain'],["Norway","Sweden","Russia"]];

           for(let w = 0 ;w<listOfNeighbours.length;w++)
               for(let e = 0;e<listOfNeighbours[w].length;e++){
                console.log(`Neighbour: ${listOfNeighbours[w][e]}`);
                   }
                   
               
                 


                   // false values --> 0, "empty string", undefined ,  null , NaN
                   console.log(Boolean(0));
                   console.log(Boolean(undefined));
                   console.log(Boolean("berkay"));
                   console.log(Boolean({}));
                   console.log(Boolean(""));


                   const money = 0;
                   if(money){
                       console.log("Don't spend it all ;)");
                   }
                   else{
                       console.log("You should get a job!");
                   }
                   


                   const bill = 400;

                   const calculate = (bill>=50 && bill<300) ? `The Bill was ${bill} the tip was ${bill*15/100}, and the total value ${bill+(bill*15/100)}`

                   : `The Bill was ${bill} the tip was ${bill*20/100}, and the total value ${bill+(bill*20/100)}`;


                   console.log(calculate);


            
                 

                   const avarage =(score1,score2,score3) =>{
                      return (score1+score2+score3)/3;
                   }
                   const avgDolphins = avarage(100,23,71);
                   const avgKoalas = avarage(65,54,49);

                   const checkWinner =(avgDolphins,avgKoalas) =>{
                  if(avgDolphins>avgKoalas){
                      console.log(
                      `DOPHİNS WİN !! (${avgDolphins})vs(${avgKoalas}) `);
                  }
                  else{
                      console.log(
                    `KOALAS WİN !! (${avgKoalas})vs(${avgDolphins}) `);
                  }
                   }
                   
                   checkWinner(avgDolphins,avgKoalas);

              

                   const Mark  = {
                       name :"Mark Miller",
                       mass: 78,
                       height:1.69,
                       calcBMI: function(){
                        this.bmi=  (this.mass/this.height*this.height);
                          return this.bmi;
                       }

                     }
                     const John = {
                         name : "John Smith",
                         mass:92,
                         height:1.95,
                         calcBMI: function(){
                            this.bmi=  (this.mass/this.height*this.height);
                              return this.bmi;
                            }
                     }
                      Mark.calcBMI();
                      John.calcBMI();
                      console.log(Mark.bmi,John.bmi)
                      
                      if(Mark.bmi>John.bmi){
                        console.log(
                            `${Mark.name}'s BMİ(${Mark.bmi}) Higher than ${John.name}'s BMİ(${John.bmi})`
                           
                        )
                      }
                        else{
                            console.log(
                                `${John.name}'s BMİ(${John.bmi}) Higher than ${Mark.name}'s BMİ(${Mark.bmi})`


                            );
                            }


                        */


                            const bills = [22,295,176,440,37,105,10,1100,86,52];
                            const tips = [];
                            const total = [];


                            for(let a = 0 ;   a<bills.length;a++){
                                tips.push(bills[a]*15/100);
                                total.push(bills[a]+tips[a]);
                            }

                            console.log(tips);
                            console.log(total);


                            const calcAvarage = Arr => { 
                                var sum = 0;
                                for(let b = 0; b<Arr.length;b++){
                                    
                                    sum = sum+Arr[b];
                                }
                                var Avarage = sum/Arr.length;
                                return Avarage;
                            }

                            console.log(calcAvarage(bills));
                            





    


                      


                   



        
        



    









         


           


              








           



            

            

    

        





   
   


