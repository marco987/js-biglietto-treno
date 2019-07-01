// Traccia:
// Calcolo prezzo del treno: Il programma dovrà
// chiedere all'utente il numero di chilometri e l'età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km
// (0.21 €/km) ma c'è uno sconto del 20% per i minorenni
// e del 40% per gli over 65.


// Dichiarazione variabili
var km, eta, prezzopieno, prezzofinale;
var prezzo = document.getElementById("prezzo")

// Richiesta km di viaggio
km = prompt("Quanti km intendi percorrere?");

// Richiesta età utente
eta = prompt("Quanti anni hai ad oggi?");

// Prezzo totale, senza sconti (0.21 €/km)
prezzopieno = 0.21 * km;

// Sconti (-20% minorenni; -40% over-65)
// Nota: .toFixed(2) serve ad arrotondare alla seconda cifra decimale
if (eta < 18) {
  prezzofinale = (prezzopieno * 0.8).toFixed(2);
  prezzo.innerHTML = "Prezzo pieno: " + prezzopieno + " €. Hai diritto allo sconto del 20%! Il costo del tuo biglietto è quindi " + prezzofinale + " €";
} else if (eta >= 65) {
  prezzofinale = (prezzopieno * 0.6).toFixed(2);
  prezzo.innerHTML = "Prezzo pieno: " + prezzopieno + " €. Hai diritto allo sconto del 40%! Il costo del tuo biglietto è quindi " + prezzofinale + " €";
} else {
  prezzofinale = (prezzopieno).toFixed(2);
  prezzo.innerHTML = "Prezzo pieno: " + prezzofinale + " €. Non hai diritto ad alcuno sconto.";
}
