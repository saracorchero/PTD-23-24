function Calcula () {
    let primer = document.getElementById("primer").value;
    primer = Number(primer);
    let segundo = document.getElementById("segundo").value;
    segundo = Number(segundo);
    let tercer = document.getElementById("tercer").value;
    tercer = Number(tercer);

    let media = (primer+segundo+tercer)/3;
    document.getElementById("texto").innerHTML = media;
}

