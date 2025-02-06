function displayRecepie(response) {
  new Typewriter("#recepie", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecepie(event) {
  event.preventDefault();
  let mainIngredient = document.querySelector("#main-ingredient").value;
  console.log(mainIngredient);
  let apiKey = "2td2983oa81aa7bb308858f488f7ba0c";
  let prompt = `user instructions: generate a recepie having ${mainIngredient} as the MAIN ingredient`;
  let context =
    "You are very passionate about rustic italian cusine, and your mission is to follow the user instructions to generate the shortest recepie possible, make sure the recepie is creative and uses up possible left-over ingredients the user might have in the fridge or cupboards. Write the recepi using this format as an example: Recepie title <br/> <br/> Ingredients<br/> ingredient number one <br/> ingredient numer two <br/> <br/> Recepie <br/> step numer one <br/> step number two <br/>. Use metric system mesurments, Write the recepie in italian. ONLY at the END of the recepie you must sign 'SheCodes Ai' inside a <strong> element after a <br/><br/>. you must not forget to use all the <br/> I mentioned. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecepie);
}
let recepieGeneratorElement = document.querySelector("#recepie-generator-form");
recepieGeneratorElement.addEventListener("submit", generateRecepie);
