// Skriv et script der indlæser en tekstfil og udskriver hvor mange bogstaver der er i den.
// Det skal skrive en fejlmeddelelse hvis indlæsingen mislykkes. Brug fs.promises.readFile().

const fs = require("fs");

fs.promises.readFile("fil-3.txt", "utf8").then(file).catch(mislykket);

function file(data) {
  // Tæl bogstaver (kun a-z og æøå i dette eksempel)
  const bogstaver = data.match(/[a-zA-ZæøåÆØÅ]/g) || [];
  console.log("Antal bogstaver i filen:", bogstaver.length);
}

function mislykket(fejl) {
  console.log("Der opstod en fejl", String(fejl));
}

// fs.promises.readFile("fil-3.txt", "utf8") returnerer en Promise.

// .then(file) betyder → hvis filen blev læst, send dens indhold som argument til file().

// .catch(mislykket) betyder → hvis der kom en fejl, kald mislykket() med fejlobjektet.

// I file() bruger vi en regex [a-zA-ZæøåÆØÅ] med g (global) for at finde alle bogstaver.

// Hvis ingen bogstaver → .match() returnerer null, så vi bruger || [] for at undgå fejl.

// Hvis vi ville lave den uden regex:
// function file(data) {
//   let antal = 0;

//   for (let tegn of data) {
//     // Tjek om tegnet er et bogstav
//     if (
//       (tegn >= "a" && tegn <= "z") ||
//       (tegn >= "A" && tegn <= "Z") ||
//       "æøåÆØÅ".includes(tegn)
//     ) {
//       antal++;
//     }
//   }
