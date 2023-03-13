function generateANumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const geraMaiuscula = () => String.fromCharCode(generateANumber(65, 91));
const geraMinuscula = () => String.fromCharCode(generateANumber(97, 123));
const geraNumero = () => String.fromCharCode(generateANumber(48, 58));
const simbolos = ",.;:[]{}=+-_%$#@!*&?";
const geraSimbolo = () => simbolos[generateANumber(0, simbolos.length)];

export default function geraSenha(
  qtd,
  maiuscula,
  minusculas,
  numeros,
  simbolos
) {
  const senhaArray = [];
  qtd = Number(qtd);
  for (let i = 0; i < qtd; i++) {
    maiuscula && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }
  return senhaArray.join("").slice(0, qtd);
}
