//CONVERTISSEUR DE NOTES EN MENTION

const note = 79;

let mention
if(note >= 90 && note <= 100 ){
         mention = "Exelent"

}

if(note >= 80 && note <= 89 ){
         mention = "Tres Bien"

}

if(note >= 70 && note <= 79 ){
         mention = "Bien"

}

if(note >= 60 && note <= 69 ){
         mention = "Assez Bien"

}

if(note >= 50 && note <= 59 ){
         mention = "Passable"

}

if(note <= 50 ){
         mention = "Insuffisant"

}

console.log(`Vous avez la note de ${note}/100 et vous avez la mention ${mention}`);
