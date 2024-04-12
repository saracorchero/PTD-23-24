let total_sopar = 102;
let nombre_començals = 7;
let result = total_sopar / nombre_començals;

document.getElementById("total_sopar").innerHTML = total_sopar + "€";
document.getElementById("començals").innerHTML = nombre_començals;
document.getElementById("total_a_pagar").innerHTML = result.toFixed(2) + "€";