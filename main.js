import { displayCharacters, fetchCharacters } from "./characters.js";

const radioButtons = document.querySelectorAll('input[name="category"]');

(async () => {
  // デフォルトでは全て表示する
  displayCharacters(await fetchCharacters("all"));

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", async (e) => {
      displayCharacters(await fetchCharacters(e.target.value));
    });
  });
})();
