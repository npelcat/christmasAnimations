//Déclarations des éléments :
const element = document.getElementById("christmas-lights");
const lights = document.querySelectorAll(".light");
const button = document.getElementById("lightOnOff");

//Fonction pour générer une couleur aléatoire en hexadécimale :
const getRandomHEX = () => {
  let chars = "0123456789ABCDEF";
  let value = "#";

  for (let i = 0; i < 6; i++) {
    value += chars[Math.floor(Math.random() * 16)];
  }
  return value;
};

//Fonction pour appliquer la couleur aléatoire aux lights :
const randomLights = () => {
  lights.forEach((self) => {
    let color = getRandomHEX();
    self.style.backgroundColor = color;
    self.style["boxShadow"] = color + ", 0 5px 50px 0 #fff";
  });
};

//Bouton lights ON/OFF :
button.addEventListener("click", () => {
  element.classList.toggle("flash");

  if (button.innerHTML === "Lights On !") {
    button.innerHTML = "Lights Off.";
  } else {
    button.innerHTML = "Lights On !";
  }

  //Random light avec Set Interval :
  let random = setInterval(() => {
    randomLights();

    if (element.classList.contains("flash") === false) {
      clearInterval(random);
      //remove style from all lights
      for (let i = 0; i < lights.length; i++) {
        lights[i].removeAttribute("style");
      }
    }
  }, 800);
});

//ANIMATION NEIGE :

const snowMaker = () => {
  const snow = document.createElement("span");
  snow.classList.add("snow");
  document.body.appendChild(snow);

  //Randomiser la taille des flocons (entre 5 et 10px)
  const size = Math.random() * 10 + 5 + "px";
  snow.style.height = size;
  snow.style.width = size;

  //Randomiser son positionnement haut-bas :
  snow.style.top = Math.random() * 100 - 98 + "%";
  snow.style.left = Math.random() * 100 + "%";

  //Supprimer les flocons du DOM au bout de 4s :
  setTimeout(() => {
    snow.remove();
  }, 3000);
};

//Se servir de l'asynchrone (setInterval) pour créer des flocons toutes les x secondes :
setInterval(snowMaker, 300);
