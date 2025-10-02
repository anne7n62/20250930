// Importerer filsystem-modulet i Node.js
const fs = require("fs");

// Angiv stien til den fil vi vil læse
const sti = "sti_til_fil";

// Definerer en asynkron funktion til at læse filen
async function filLæsning() {
  try {
    // Læser filen asynkront med promises og venter på at den er færdig
    let data = await fs.promises.readFile(sti, "utf8");

    // Tæller hvor mange bogstaver der findes i filens indhold
    let cntr = 0;
    for (let i of data) {
      // Hvis tegnet kan omdannes til både lille og stort bogstav, er det et bogstav
      if (i.toLowerCase() !== i.toUpperCase()) cntr++;
    }

    // Udskriver resultatet i konsollen
    console.log(`Filen indeholder ${cntr} bogstaver`);
  } catch (fejl) {
    // Hvis der sker en fejl (fx filen ikke findes), fanges den her
    console.error("Fejl under fillæsningen:", String(fejl));
  }
}

// Kalder funktionen for at starte processen
filLæsning();
