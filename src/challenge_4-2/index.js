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

  axios
    .get(userURL)
    .then(function (response) {
      listElement.innerHTML = "";
      let repos = response.data;
      for (const repo of repos) {
        listRepos(repo.name);
      }
      inputElement.value = "";
    })
    .catch(function (reject) {
      console.log(reject);
    });
}

buttonElement.addEventListener("click", importRepos);
