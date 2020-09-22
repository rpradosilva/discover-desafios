const inputElement = document.querySelector(".app input");
const listElement = document.querySelector(".app ul");
const buttonElement = document.querySelector(".app button");

function makeURL() {
  let githubUser = inputElement.value;
  return `https://api.github.com/users/${githubUser}/repos`;
}

function listRepos(repo) {
  const repoElement = document.createElement("li");
  repoElement.textContent = repo;
  listElement.appendChild(repoElement);
}

function importRepos() {
  let userURL = makeURL();
  listElement.innerHTML = "";
  listRepos("Carregando..");
  axios
    .get(userURL)
    .then(function (response) {
      let repos = response.data;
      listElement.innerHTML = "";
      for (const repo of repos) {
        console.log(repo.clone_url);
        listRepos(repo.name);
      }
      inputElement.value = "";
    })
    .catch(function (reject) {
      listElement.innerHTML = "Usuário não encontrado";
    });
}

buttonElement.addEventListener("click", importRepos);
