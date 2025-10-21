function calcul_moyenne() {
    var n1 = prompt("Donner la première note/20 :");
    var n2 = prompt("Donner la deuxième note/20 :");
    var n3 = prompt("Donner la troisième note/20 :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");

    var moyenne = somme / 3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    }
    else if (moyenne >= 10 && moyenne < 12) {
        document.write("Admis - Passable");
    }
    else if (moyenne >= 12 && moyenne < 14) {
        document.write("Admis - Bien");
    }
    else if (moyenne >= 14) {
        document.write("Admis - Très Bien");
    }

    else {
        document.write("Très bien");
    }


    document.write("<br><button onclick=\"window.location.href='index.html'\">Retour à l'accueil</button>");
}