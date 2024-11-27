function criptareCezar(text, cheie) {
    var rezultat = "";
    for (let i = 0; i < text.length; i++) {
        let litera = text[i];
        if (litera.match(/[a-zA-Z]/i)) {
            let codASCII = text.charCodeAt(i);
            // majuscule
            if (codASCII >= 65 && codASCII <= 90) {
                litera = String.fromCharCode(((codASCII - 65 + cheie) % 26) + 65);
            }
            //minuscule
            else if (codASCII >= 97 && codASCII <= 122) {
                litera = String.fromCharCode(((codASCII - 97 + cheie) % 26) + 97);
            }
        }
        rezultat += litera;
    } 
    console.log(rezultat, "afisat");
    return rezultat;
}



function cripteaza() {
    const text=document.getElementById("text-intrare").value;
    const cheie=parseInt(document.getElementById("cheie-criptare").value);
    if(isNaN(cheie)){
        document.getElementById("rezultat").innerText="Nu ai introdus o cheie valida.";
        alert("Nu ai introdus o cheie valida.");
        return;
    }
    const rezultat=criptareCezar(text,cheie);
    document.getElementById("rezultat").innerText=rezultat;
}