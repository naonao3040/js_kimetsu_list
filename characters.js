export function displayCharacters(characters) {
  const container = document.getElementById("character-container");
  container.innerHTML = "";

  const cardList = characters.map(({ name, image, category }) => {
    const imageUrl = `https://ihatov08.github.io${image}`;
    const cardElement = `
        <div class="character-card">
          <img src="${imageUrl}" alt="${name}">
          <h2>${name}</h2>
          <p>${category}</p>
        </div>`;
    return cardElement;
  });
  container.innerHTML = cardList.join("");
}

export async function fetchCharacters(type) {
  const modal = document.getElementById("loading-modal");
  modal.style.display = "flex";

  try {
    const response = await fetch(
      `https://ihatov08.github.io/kimetsu_api/api/${type}.json`
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.error("データの取得に失敗しました");
    return [];
  } finally {
    modal.style.display = "none";
  }
}
