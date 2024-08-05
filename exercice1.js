//Caluculateur de pourboire

const MONTANT_FACTURE = 150;

const PourcentagePourboir = 10;
let montantPourboir = (MONTANT_FACTURE * PourcentagePourboir)/100;

let totalPaie = MONTANT_FACTURE + montantPourboir;

console.log(`La facture est de ${MONTANT_FACTURE}€`);
console.log(`Le Pourboir est de ${montantPourboir}€`);
console.log(`Le total Paie est  de ${totalPaie}`);