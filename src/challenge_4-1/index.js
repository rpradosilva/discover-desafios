function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    idade >= 18 ? resolve() : reject();
  });
}
checaIdade(20)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
