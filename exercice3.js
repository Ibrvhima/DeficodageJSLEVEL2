//Convertisseur d'IMC

const weight = 80;
const height = 1.82;

const IMC = weight / (height * height);

let categorie;
if (IMC < 18.5) {
  categorie = "sous poid";
} else if (IMC >= 18) {
  categorie = "poids normal";
} else {
  categorie = "poids eleve";
}

console.log(`IMC = ${IMC.toFixed(3)} and categorie is ${categorie}`);
