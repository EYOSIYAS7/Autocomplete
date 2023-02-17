const inputEl = document.getElementById("inputText");

const match = document.getElementById("matchList");
let html = [];
inputEl.addEventListener("input", () => search(inputEl.value));

async function search(text) {
  const response = await fetch("texts.json");

  // make it json
  const states = await response.json();

  let matches = states.filter((state) => {
    let searchName = RegExp(`^${text}`, "gi");
    return state.name.match(searchName);
  });

  if (inputEl.value === "") {
    matches = [];
    match.innerHTML = " ";
  }
  output(matches);
}

function output(matches) {
  if (matches.length > 0) {
    for (let i = 0; i < matches.length; i++) {
      html.push(
        `<div class="text-start text-white card card-body mb-1 bg-dark">
          <p class="fs-4">${matches[i].name} (${matches[i].abbr}) <span class ="text-primary">${matches[i].capital}</span> <br>
          </p>  <small> lat: ${matches[i].lat} long: ${matches[i].long}</small>
        </div>`
      );
    }
    console.log(typeof html);
    console.log(html);

    match.innerHTML = html.join("");
    html = [];
  }
}
/* there is also another method that use the map method that gives u a new array */
