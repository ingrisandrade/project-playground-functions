/* eslint-disable max-lines-per-function */
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4

function concatName(listaPalavras) {
  return listaPalavras[(listaPalavras.length - 1)] + ', ' + listaPalavras[0];
} // Não passou pelo EsLint ? Rever questão.

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6

function highestCount(arrayNumeros) { // Não passou pelo EsLint ? Rever questão.
  let maiorNumero = arrayNumeros[0];
  let contador = 0;
  for (let index = 1; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > maiorNumero) {
      maiorNumero = arrayNumeros[index];
    }
  }
  for (let cont = 0; cont < arrayNumeros.length; cont += 1) {
    if (maiorNumero === arrayNumeros[cont]) {
      contador += 1;
    }
  }
  return contador;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    resultado = 'cat1';
  } else if (distanciaCat1 > distanciaCat2) {
    resultado = 'cat2';
  } else if (distanciaCat1 === distanciaCat2) {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 2, 2));

// Desafio 8
function fizzBuzz(array) {
  let divisivelPor3;
  let divisivelPor5;
  let resultado = [];

  for (let index = 0; index < array.length; index += 1) {
    divisivelPor3 = array[index] % 3;
    divisivelPor5 = array[index] % 5;

    if (divisivelPor3 !== 0 && divisivelPor5 !== 0) {
      resultado.push('bug!');
    } else if (divisivelPor3 === 0 && divisivelPor5 === 0) {
      resultado.push('fizzBuzz');
    } else if (divisivelPor3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('buzz');
    }
  }
  return resultado;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(texto) {
  texto = texto.replace(/a/g, 1);
  texto = texto.replace(/e/g, 2);
  texto = texto.replace(/i/g, 3);
  texto = texto.replace(/o/g, 4);
  texto = texto.replace(/u/g, 5);
  return texto;
}

console.log(encode('hi there'));

function decode(texto) {
  texto = texto.replace(/1/g, 'a');
  texto = texto.replace(/2/g, 'e');
  texto = texto.replace(/3/g, 'i');
  texto = texto.replace(/4/g, 'o');
  texto = texto.replace(/5/g, 'u');
  return texto;
}

console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(nomesDeTecnologias, name) {
  nomesDeTecnologias.sort();
  let array = [];

  for (let index = 0; index < nomesDeTecnologias.length; index += 1) {
    array.push({
      tech: nomesDeTecnologias[index],
      name,
    });
  }
  if (nomesDeTecnologias.length === 0) {
    return 'Vazio!';
  }
  return array;
}

console.log(techList(['HTML', 'CSS', 'JavaScript', 'React', 'Python'], 'Ingris'));
console.log(techList([], 'Ingris'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
