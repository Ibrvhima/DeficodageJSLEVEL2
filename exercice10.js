//Veirificateur d'eligibité de vote

const AGE_MINIMAL_VOTE = 18;

let agePersonne = 15;

let categorie;
let ageManquant = AGE_MINIMAL_VOTE - agePersonne;

if(agePersonne >= AGE_MINIMAL_VOTE){
         categorie = " Vous êtes éligible pour voter";
}
else{
         categorie =`Vous n'êtes pas éligible pour voter. Revener donc dans ${ageManquant} an(s)`
}
console.log(categorie);