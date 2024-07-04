const startBtn = document.querySelector(".start-btn");
const cleanBtn = document.querySelector(".delete-btn");
const postsContainer = document.querySelector(".wrap");

const fetchData = () => {
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("container-img");
        postElement.innerHTML = `
<a href="${post.url}" target="_blank"><img src="${post.url}" alt="Картинка_${post.id}" style="display:none;" /></a>
<div class="container-loader"></div>`;
        postsContainer.appendChild(postElement);
      });

      const listImg = document.querySelectorAll(".container-img");
      listImg.forEach((img) => {
        const imgItem = img.querySelector("img");
        const imgLoader = img.querySelector(".container-loader");
        imgItem.addEventListener("load", function () {
          imgLoader.style.display = "none";
          imgItem.style.display = "block";
        });

        img.addEventListener("error", () => {
          imgLoader.style.display = "none";
          imgItem.style.display = "none";
          console.error("Ошибка загрузки");
        });
      });
    })

    .catch((error) => {
      console.error("Error: ", error);
    });
};

const cleanData = () => {
  postsContainer.innerHTML = "";
};

startBtn.addEventListener("click", fetchData);
cleanBtn.addEventListener("click", cleanData);