// Desafio 11
function generatePhoneNumber(numeroTelefone) {
  let telefone = '(' + numeroTelefone[0] + numeroTelefone[1] + ')' +
  ' ' + numeroTelefone[2] + numeroTelefone[3] + numeroTelefone[4] + numeroTelefone[5] + numeroTelefone[6] + '-' +
  numeroTelefone[7] + numeroTelefone[8] + numeroTelefone[9] + numeroTelefone[10];

  console.log(typeof telefone);
  let contador = 0;
  if (numeroTelefone.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeroTelefone.length; index += 1) {
    let arrayTotal = numeroTelefone[index];
    if (numeroTelefone[index] < 0 || numeroTelefone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  for (let indice = 0; indice < numeroTelefone.length; indice += 1) {
    let arrayTotal = numeroTelefone[indice];
    if (numeroTelefone[indice] === numeroTelefone[index]) {
      contador += 1;
    } if (contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  contador = 0;
  }
  return telefone;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 0]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 1, 1, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
