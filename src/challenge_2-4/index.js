const names = ["Diego", "Gabriel", "Lucas"];

function createItems(items) {
  const body = document.querySelector("body");
  const list = document.createElement("ul");

  for (const item of items) {
    const listItem = document.createElement("li");
    body.appendChild(list).appendChild(listItem).innerHTML = item;
  }
}

function addName() {
  const input = document.querySelector(`[name="name"]`);
  const inputValue = input.value;
  names.push(inputValue);

  document.getElementsByTagName("ul")[0].remove();

  createItems(names);

  document.getElementsByTagName("form")[0].reset();
}

createItems(names);
