function somme() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;
}

function soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("resultat").value = c;
}

function multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("resultat").value = c;
}

function parite() {
    var c = document.getElementById("resultat").value;

    if (c === "") {
        document.getElementById("t4").value = "";
        return;
    }

    if (Number(c) % 2 === 0) {
        document.getElementById("t4").value = "Pair";
    } else {
        document.getElementById("t4").value = "Impair";
    }
}

function permutation() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

   
    document.getElementById("t1").value = b;
    document.getElementById("t2").value = a;
}

function resetChamps() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultat").value = "";
    document.getElementById("t4").value = "";
}

function division() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;

    if (Number(b) === 0) {
        document.getElementById("resultat").value = "Division impossible";
        document.getElementById("t4").value = "";
        return;
    }

    var c = Number(a) / Number(b);
    document.getElementById("resultat").value = c;
}




