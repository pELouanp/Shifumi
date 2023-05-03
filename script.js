const body = document.querySelector("body");

const titre = document.createElement("h1");
titre.textContent = "SHI FU MI";

const line = document.createElement("hr");
line.style.display = "block";
line.style.marginTop = "40px";
line.style.marginBottom = "60px";
line.style.width = "750px";
line.style.height = "1px";
line.style.background = "#4aaa69";
line.style.border = "none";

const line2 = document.createElement("hr");
line2.style.display = "block";
line2.style.marginTop = "60px";
line2.style.width = "750px";
line2.style.height = "1px";
line2.style.background = "#4aaa69";
line2.style.border = "none";

const line3 = document.createElement("hr");
line3.style.display = "block";
line3.style.marginTop = "100px";
line3.style.height = "0px";
line3.style.background = "#4aaa69";
line3.style.border = "none";

const Pierre = document.createElement("button");
Pierre.textContent = "Pierre";
Pierre.style.border = "none";
Pierre.style.fontSize = "25px";
Pierre.style.padding = "10px";
Pierre.style.letterSpacing = "2px";
Pierre.style.boxShadow = "2px 2px 2px";
Pierre.style.background = "#E4edf1";
Pierre.style.borderRadius = "5px";
Pierre.style.cursor = "pointer";
Pierre.style.fontFamily = "nanum pen script, cursive";

const Feuille = document.createElement("button");
Feuille.textContent = "Feuille";
Feuille.style.margin = "0 130px 0px 140px";
Feuille.style.border = "none";
Feuille.style.fontSize = "25px";
Feuille.style.padding = "10px";
Feuille.style.letterSpacing = "2px";
Feuille.style.boxShadow = "2px 2px 2px";
Feuille.style.background = "#E4edf1";
Feuille.style.borderRadius = "5px";
Feuille.style.cursor = "pointer";
Feuille.style.fontFamily = "nanum pen script, cursive";

const Ciseaux = document.createElement("button");
Ciseaux.textContent = "Ciseaux";
Ciseaux.style.border = "none";
Ciseaux.style.fontSize = "25px";
Ciseaux.style.padding = "10px";
Ciseaux.style.letterSpacing = "2px";
Ciseaux.style.boxShadow = "2px 2px 2px";
Ciseaux.style.background = "#E4edf1";
Ciseaux.style.borderRadius = "5px";
Ciseaux.style.cursor = "pointer";
Ciseaux.style.fontFamily = "nanum pen script, cursive";

const Pierre2 = document.createElement("button");
Pierre2.textContent = "Pierre";
Pierre2.style.border = "none";
Pierre2.style.fontSize = "25px";
Pierre2.style.padding = "10px";
Pierre2.style.letterSpacing = "2px";
Pierre2.style.boxShadow = "2px 2px 2px";
Pierre2.style.background = "#E4edf1";
Pierre2.style.borderRadius = "5px";
Pierre2.style.cursor = "pointer";
Pierre2.style.fontFamily = "nanum pen script, cursive";

const Feuille2 = document.createElement("button");
Feuille2.textContent = "Feuille";
Feuille2.style.margin = "0 130px 0px 140px";
Feuille2.style.border = "none";
Feuille2.style.fontSize = "25px";
Feuille2.style.padding = "10px";
Feuille2.style.letterSpacing = "2px";
Feuille2.style.boxShadow = "2px 2px 2px";
Feuille2.style.background = "#E4edf1";
Feuille2.style.borderRadius = "5px";
Feuille2.style.cursor = "pointer";
Feuille2.style.fontFamily = "nanum pen script, cursive";

const Ciseaux2 = document.createElement("button");
Ciseaux2.textContent = "Ciseaux";
Ciseaux2.style.border = "none";
Ciseaux2.style.fontSize = "25px";
Ciseaux2.style.padding = "10px";
Ciseaux2.style.letterSpacing = "2px";
Ciseaux2.style.boxShadow = "2px 2px 2px";
Ciseaux2.style.background = "#E4edf1";
Ciseaux2.style.borderRadius = "5px";
Ciseaux2.style.cursor = "pointer";
Ciseaux2.style.fontFamily = "nanum pen script, cursive";

const answer = document.createElement("h2");
answer.style.textAlign = "center";
answer.style.margin = "50px 280px 0 280px";
answer.style.borderRadius = "5px";
answer.style.padding = "5px";

const div = document.createElement("div");
div.style.background = "#f6c4ff";
div.style.margin = "20px 300px 0 300px";
div.style.paddingTop = "10px";
div.style.paddingBottom = "10px";
div.style.textAlign = "center";
div.style.fontFamily = "nanum pen script, cursive";
div.style.letterSpacing = "2px";
div.style.borderRadius = "10px";
div.style.boxShadow = "2px 2px 2px";

let scoreJ = 0;
let scoreO = 0;
let manches = 0;

let scoreJoueur = document.createElement("h3");
scoreJoueur.style.marginTop = "50px";

const pseudo = prompt("Entrez votre pseudo");

scoreJoueur.textContent = "Score de " + pseudo + " " + ":" + " " + scoreJ;

let scoreOrdi = document.createElement("h3");
scoreOrdi.textContent = "Score de Ordi :" + " " + scoreO;

let parti = document.createElement("h3");
parti.textContent = "Nombre de manches jouées :" + " " + manches;

const tourJoueur = document.createElement("h3");
tourJoueur.textContent = pseudo;
const tourOrdi = document.createElement("h3");
tourOrdi.textContent = "Ordi";

body.appendChild(div);

div.appendChild(titre);
div.appendChild(line);
div.appendChild(tourJoueur);
div.appendChild(Pierre);
div.appendChild(Feuille);
div.appendChild(Ciseaux);
div.appendChild(line3);
div.appendChild(tourOrdi);
div.appendChild(Pierre2);
div.appendChild(Feuille2);
div.appendChild(Ciseaux2);
div.appendChild(line2);
div.appendChild(answer);
div.appendChild(scoreJoueur);
div.appendChild(scoreOrdi);
div.appendChild(parti);

let shifu = ["Pierre", "Feuille", "Ciseaux"];

const pierreEvent = () => {
  console.log("Pierre");
  Pierre.style.background = "#F59ae8";
  Feuille.style.background = "#E4edf1";
  Ciseaux.style.background = "#E4edf1";

  let shifumi = shifu[Math.floor(Math.random() * shifu.length)];

  console.log(shifumi);

  if (shifumi == "Pierre") {
    Pierre2.style.background = "#F59ae8";
    Ciseaux2.style.background = "#E4edf1";
    Feuille2.style.background = "#E4edf1";
    answer.textContent = "Egalité !";
    answer.style.background = "#F4e8f5";
  } else if (shifumi == "Feuille") {
    Pierre2.style.background = "#E4edf1";
    Ciseaux2.style.background = "#E4edf1";
    Feuille2.style.background = "#F59ae8";
    answer.textContent = "Vous avez Perdu !";
    answer.style.background = "#E063f1";
    scoreOrdi.textContent = "Score de Ordi :" + " " + scoreO++;
  } else {
    Pierre2.style.background = "#E4edf1";
    Ciseaux2.style.background = "#F59ae8";
    Feuille2.style.background = "#E4edf1";
    answer.textContent = "Vous avez Gagné !";
    answer.style.background = "#F59ae8";
    scoreJoueur.textContent = "Score de " + pseudo + " " + ":" + " " + scoreJ++;
  }
  parti.textContent = "Nombre de manches jouées :" + " " + manches++;
};

const feuilleEvent = () => {
  console.log("Feuille");
  Feuille.style.background = "#F59ae8";
  Pierre.style.background = "#E4edf1";
  Ciseaux.style.background = "#E4edf1";

  let shifumi = shifu[Math.floor(Math.random() * shifu.length)];
  console.log(shifumi);

  if (shifumi == "Feuille") {
    Feuille2.style.background = "#F59ae8";
    Ciseaux2.style.background = "#E4edf1";
    Pierre2.style.background = "#E4edf1";
    answer.textContent = "Egalité !";
    answer.style.background = "#F4e8f5";
  } else if (shifumi == "Ciseaux") {
    Feuille2.style.background = "#E4edf1";
    Ciseaux2.style.background = "#F59ae8";
    Pierre2.style.background = "#E4edf1";
    answer.textContent = "Vous avez Perdu !";
    answer.style.background = "#E063f1";
    scoreOrdi.textContent = "Score de Ordi :" + " " + scoreO++;
  } else {
    Feuille2.style.background = "#E4edf1";
    Ciseaux2.style.background = "#E4edf1";
    Pierre2.style.background = "#F59ae8";
    answer.textContent = "Vous avez Gagné !";
    answer.style.background = "#F59ae8";
    "Score de " + pseudo + " " + ":" + " " + scoreJ++;
  }
  parti.textContent = "Nombre de manches jouées :" + " " + manches++;
};

const ciseauxEvent = () => {
  console.log("Ciseaux");
  Ciseaux.style.background = "#F59ae8";
  Feuille.style.background = "#E4edf1";
  Pierre.style.background = "#E4edf1";

  let shifumi = shifu[Math.floor(Math.random() * shifu.length)];
  console.log(shifumi);

  if (shifumi == "Ciseaux") {
    Ciseaux2.style.background = "#F59ae8";
    Feuille2.style.background = "#E4edf1";
    Pierre2.style.background = "#E4edf1";
    answer.textContent = "Egalité !";
    answer.style.background = "#F4e8f5";
  } else if (shifumi == "Pierre") {
    Ciseaux2.style.background = "#E4edf1";
    Feuille2.style.background = "#E4edf1";
    Pierre2.style.background = "#F59ae8";
    answer.textContent = "Vous avez Perdu !";
    answer.style.background = "#E063f1";
    scoreOrdi.textContent = "Score de Ordi :" + " " + scoreO++;
  } else {
    Ciseaux2.style.background = "#E4edf1";
    Feuille2.style.background = "#F59ae8";
    Pierre2.style.background = "#E4edf1";
    answer.textContent = "Vous avez Gagné !";
    answer.style.background = "#F59ae8";
    "Score de " + pseudo + " " + ":" + " " + scoreJ++;
  }
  parti.textContent = "Nombre de manches jouées :" + " " + manches++;
};

Pierre.addEventListener("click", () => pierreEvent());
Feuille.addEventListener("click", () => feuilleEvent());
Ciseaux.addEventListener("click", () => ciseauxEvent());

Pierre.addEventListener("mouseenter", () => {
  Pierre.style.transform = "scale(1.1)";
});
Feuille.addEventListener("mouseenter", () => {
  Feuille.style.transform = "scale(1.1)";
});
Ciseaux.addEventListener("mouseenter", () => {
  Ciseaux.style.transform = "scale(1.1)";
});

Pierre.addEventListener("mouseout", () => {
  Pierre.style.transform = "scale(1)";
});
Feuille.addEventListener("mouseout", () => {
  Feuille.style.transform = "scale(1)";
});
Ciseaux.addEventListener("mouseout", () => {
  Ciseaux.style.transform = "scale(1)";
});

Pierre.addEventListener("mousedown", () => {
  Pierre.style.transform = "scale(1)";
});
Feuille.addEventListener("mousedown", () => {
  Feuille.style.transform = "scale(1)";
});
Ciseaux.addEventListener("mousedown", () => {
  Ciseaux.style.transform = "scale(1)";
});

Pierre.addEventListener("mouseup", () => {
  Pierre.style.transform = "scale(1.1)";
});
Feuille.addEventListener("mouseup", () => {
  Feuille.style.transform = "scale(1.1)";
});
Ciseaux.addEventListener("mouseup", () => {
  Ciseaux.style.transform = "scale(1.1)";
});

Pierre2.addEventListener("mouseenter", () => {
  Pierre2.style.transform = "scale(1.1)";
});
Feuille2.addEventListener("mouseenter", () => {
  Feuille2.style.transform = "scale(1.1)";
});
Ciseaux2.addEventListener("mouseenter", () => {
  Ciseaux2.style.transform = "scale(1.1)";
});

Pierre2.addEventListener("mouseout", () => {
  Pierre2.style.transform = "scale(1)";
});
Feuille2.addEventListener("mouseout", () => {
  Feuille2.style.transform = "scale(1)";
});
Ciseaux2.addEventListener("mouseout", () => {
  Ciseaux2.style.transform = "scale(1)";
});

Pierre2.addEventListener("mousedown", () => {
  Pierre2.style.transform = "scale(1)";
});
Feuille2.addEventListener("mousedown", () => {
  Feuille2.style.transform = "scale(1)";
});
Ciseaux2.addEventListener("mousedown", () => {
  Ciseaux2.style.transform = "scale(1)";
});

Pierre2.addEventListener("mouseup", () => {
  Pierre2.style.transform = "scale(1.1)";
});
Feuille2.addEventListener("mouseup", () => {
  Feuille2.style.transform = "scale(1.1)";
});
Ciseaux2.addEventListener("mouseup", () => {
  Ciseaux2.style.transform = "scale(1.1)";
});
