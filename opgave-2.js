// importer filsystem-modulet
const fs = require("fs");

// sti til filen og encoding type
const sti = "tekst.txt";
const type = "utf8";

// brug fs.readFile
fs.readFile(sti, type, function callback(fejl, data) {
  if (fejl) {
    console.error("Der opstod en fejl ved læsning:", fejl.message);
  } else {
    console.log("Indhold af filen:");
    console.log(data);
  }
});

console.log("Programmet fortsætter imens filen læses...");

// Forklaring

// fs.readFile(sti, type, callback):

// sti → navnet eller stien til filen.

// type → typisk "utf8" for at læse som tekst. Uden den får du en buffer.

// callback → funktionen, der bliver kaldt, når Node er færdig med at læse filen.

// Callback-funktionen modtager to argumenter:

// fejl (hvis der er sket noget galt, fx filen findes ikke).

// data (indholdet af filen, hvis alt gik godt).

// Fordi fs.readFile er asynkron, kører console.log("Programmet fortsætter...") før filen er færdig med at blive læst.
