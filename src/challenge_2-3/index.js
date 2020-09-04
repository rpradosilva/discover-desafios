const names = ["Diego", "Gabriel", "Lucas"];
const body = document.querySelector("body");
const list = document.createElement("ul");

function createItems(names) {
  for (const name of names) {
    const listItem = document.createElement("li");

    body.appendChild(list).appendChild(listItem).innerHTML = name;
  }
}

createItems(names);
