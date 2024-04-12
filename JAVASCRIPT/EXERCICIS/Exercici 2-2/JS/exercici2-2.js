function Calcula () {
    // lee el dato del campo "total" y lo guarda en la variable total
    let total = document.getElementById("total").value;
    // lee el dato començals y lo guarda en la variable començals
    let començals = document.getElementById("començals").value;

    let division = total/començals; 
    
    document.getElementById("texto").innerHTML = division;
}
