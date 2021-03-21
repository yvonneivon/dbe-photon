const auth = "563492ad6f91700001000001af3c446ff17d4cf4b1bc005a5637587e";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitButton = document.querySelector(".submit-btn");
let searcValue;

async function curatedPhotos() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=15&page=1",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    }
  );
  const data = await dataFetch.json();
  data.photos.forEach((photo) => {
    console.log(data);

    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `<img src=${photo.src.large}></img>
      <p>${photo.photographer}</p> <p>${photo.photographer_url}</p>
      `;
    gallery.appendChild(galleryImg);
  });
}

curatedPhotos();
