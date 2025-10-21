function calcul_moyenne() {
  var n1 = prompt("Donner la première note :");
  var n2 = prompt("Donner la deuxième note :");
  var n3 = prompt("Donner la troisième note :");

  var somme = Number(n1) + Number(n2) + Number(n3);

  document.write("Voici la somme : " + somme + "<br>");

  var moyenne = somme / 3;

  document.write("Voici la moyenne : " + moyenne + "<br>");

  if (moyenne < 10) {
    document.write("Vous n'êtes pas admis");

  } 
  else {

    
    document.write("Vous êtes admis !");
  }

   document.write("<br><button onclick=\"window.location.href='index.html'\">Retour à l'accueil</button>");
}


function test_age() {
  var age = prompt("Quelle est votre âge ?");

  if (age < 18) {
    document.write("Vous êtes mineur");
    document.bgColor = "red";
  } else {
    document.write("Vous êtes majeur");
    document.bgColor = "green";
  }

   document.write("<br><button onclick=\"window.location.href='index.html'\">Retour à l'accueil</button>");
}


function simple_affichage() {
  var name = prompt("Donner votre nom");
  let prenom = prompt("Donner votre prénom");

  document.write('<div style="margin:100px auto; width:300px; border:2px solid blue; text-align:center;">');

  document.write("YO " + prenom + " " + name + "✌️");
  document.write('</div>');

   document.write("<br><button onclick=\"window.location.href='index.html'\">Retour à l'accueil</button>");
}

function test_couleur() {
  let couleur = prompt("Donner un couleur");

  if (couleur == "rouge" || couleur == "red") {
    document.body.style.backgroundColor = "red";
  }

  else if (couleur == "bleu" || couleur == "blue") {
    document.body.style.backgroundColor = "blue";
  }

  else if (couleur == "vert" || couleur == "green") {
    document.body.style.backgroundColor = "green";
  }

  else if (couleur == "rose" || couleur == "pink") {
    document.body.style.backgroundColor = "pink";
  }

  else {
    document.write("Couleur non comprise");
  }
}
