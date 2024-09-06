"use strict";

const heroecoffee = {
  name: "Heroes Coffee",
  location: "Kipe Plazza Ratoma",
  categorie: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],
};

const arr = [1, 3, 4];

//const a = arr[0];
//const b = arr[1];
//const c = arr[2];

//La destructuration
//const [x, y, z] = arr;

//console.log(x);
//console.log(y);
//console.log(z);

const [first, second, third] = heroecoffee.categorie;
console.log(first);
console.log(second);
console.log(third);

const nestedArray = [1, 2, 3, [4, 6, 7]];
const [a, ,b,[, ,c]] = nestedArray

console.log(a);
console.log(b);
console.log(c);
