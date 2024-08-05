//Caluculateur de pourboire

const MONTANT_FACTURE = 140;

const PourcentagePourboir = 15;
let montantPourboir = (MONTANT_FACTURE *PourcentagePourboir)/100;

let totalPaie = MONTANT_FACTURE + montantPourboir;

console.log(montantPourboir);
console.log(totalPaie);