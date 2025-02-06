function generateRecepie(event) {
  event.preventDefault();
  new Typewriter("#recepie", {
    strings:
      "Spaghetti 320 g Guanciale 150 g Tuorli (di uova medie) 6 Pecorino Romano DOP 50 g Pepe nero q.b.",
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}
let recepieGeneratorElement = document.querySelector("#recepie-generator-form");
recepieGeneratorElement.addEventListener("submit", generateRecepie);
