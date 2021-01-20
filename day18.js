
/*let plat = "pizza";

if (plate === "pizza")
    alert("Amazing!");



console.log(123)
console.log("Amazing!")

let plate;
plate = "pizza";
plate = "eggs";

const birthYear = 1998;
let myBestFriend = "Sarah";
let my2ndBestFriend = "Mary";

const firstName = "John";
console.log(firstName);

const lastName = "Williams";
console.log(lastName);


let city = "New York City";
console.log(city);
let borough = "Queens";
console.log(borough);
let area = 108.1 + " " + "mi^2";
console.log(area);
let population = 2.287 + " " + "million";
console.log(population);
*/


// BMI = mass / height ** 2 = mass/( height * height)(mass in kg and height in meter)
// DATA SET 1
let lucasH = 1.69;
let lucasW = 78;
let johnH = 1.95;
let johnW = 92;
let lucasBMI = lucasW / (lucasH ** 2);
let johnBMI = johnW / (johnH ** 2);

let lucasHigherBMI = true;


// DATA SET 2
lucasH = 1.88;
lucasW = 95;
johnH = 1.76;
johnW = 85;
lucasBMI = lucasW / (lucasH ** 2);
johnBMI = johnW / (johnH ** 2);

lucasHigherBMI = false;

let statement = `Lucas and John are friends, Lucas is ${lucasH} tall and John is ${johnH} tall. So John has higher BMI than Lucas, that is ${johnBMI}`

console.log(statement)
