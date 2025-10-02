// Skriv et script der tæller hvor mange eksemplarer der er af hvert bogstav i en tekst.
// Der skelnes ikke mellem stor- og småbogstaver. Brug en generatorfunktion til at levere
// bogstaverne til den programdel der beregner statistikken.
// Generatorfunktionen skal filtrere alle ikkebogstaver fra.

// Generatorfunktion der "udleverer" bogstaver ét ad gangen
function* bogstaver(text) {
  for (let i of text) {
    // check: er tegnet et bogstav?
    // (hvis lower != upper, er det et bogstav – tal og tegn er ens i lower/upper)
    if (i.toLowerCase() !== i.toUpperCase()) {
      // yield "pauser" funktionen og sender bogstavet ud
      // alle bogstaver returneres som store bogstaver (ensartethed)
      yield i.toUpperCase();
    }
  }
}

// Vi opretter en generator ud fra funktionen og giver den en tekst at arbejde med
const bogstav = bogstaver("Dette er kun for demonstration.");

// Objekt til at tælle forekomster (en slags "ordbog")
const stats = {};

// Vi henter ét bogstav ad gangen fra generatoren
while (true) {
  let c = bogstav.next(); // c = { value: "D", done: false } fx.
  if (c.done) break; // når generatoren er færdig, stopper vi løkken

  // Hvis bogstavet allerede findes i stats-objektet, tæller vi +1
  // ellers opretter vi en ny tæller med værdien 1
  if (stats[c.value]) {
    stats[c.value]++;
  } else {
    stats[c.value] = 1;
  }
}

// Til sidst udskriver vi resultatet (bogstav + antal)
for (let b in stats) {
  console.log(b, stats[b]);
}
