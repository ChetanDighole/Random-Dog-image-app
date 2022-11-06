const btnx = document.querySelector(".btnx");
const dog = document.querySelector("#dog");

btnx.addEventListener("click", change);

function change() {
  fetch("https://dog.ceo/api/breeds/image/random")

    .then((response) => response.json())

    .then((responseJson) => {
      dog.innerHTML = `<img src="${responseJson.message}" height="300px" "width=300px"/>`;
    });
}
