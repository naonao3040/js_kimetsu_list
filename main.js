import { displayCharacters, fetchCharacters } from "./characters.js";

const radioButtons = document.querySelectorAll('input[name="category"]');

(() => {
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", async (e) => {
      const characters = await fetchCharacters(e.target.value);
      displayCharacters(characters);
    });
  });
})();
