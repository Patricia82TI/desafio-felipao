let nomeHeroi = "Platina Diamante";
let nivelExperiencia = 7500;

if (nivelExperiencia < 1000) {
  nomeHeroi = "Ferro";
  console.log(
    "O herói de nome " + nomeHeroi + "está no nível de " + nivelExperiencia
  );
} else if (nivelExperiencia >= 1001 && nivelExperiencia <= 2000) {
  nomeHeroi = "Bronze";
  console.log(
    "O herói de nome " + nomeHeroi + "está no nível de " + nivelExperiencia
  );
} else if (nivelExperiencia >= 2001 && nivelExperiencia <= 5000) {
  nomeHeroi = "Prata";
  console.log(
    "O herói de nome " + nomeHeroi + "está no nível de " + nivelExperiencia
  );
} else if (nivelExperiencia >= 5001 && nivelExperiencia <= 7000) {
  nomeHeroi = "Ouro";
  console.log(
    "O herói de nome " + nomeHeroi + "está no nível de " + nivelExperiencia
  );
} else if (nivelExperiencia >= 7001 && nivelExperiencia <= 8000) {
  nomeHeroi = "Platina Diamante";
  console.log(
    "O herói de nome " + nomeHeroi + "está no nível de " + nivelExperiencia
  );
} else if (nivelExperiencia >= 8001 && nivelExperiencia <= 9000) {
  nomeHeroi = "Ascendente";
  console.log(
    "O herói de nome " + nomeHeroi + "está no nível de " + nivelExperiencia
  );
} else if (nivelExperiencia >= 9001 && nivelExperiencia <= 10000) {
  nomeHeroi = "Imortal";
  console.log(
    "O herói de nome " + nomeHeroi + "está no nível de " + nivelExperiencia
  );
} else if (nivelExperiencia >= 10001) {
  nomeHeroi = "Radiante";
  console.log(
    "O herói de nome " + nomeHeroi + "está no nível de " + nivelExperiencia
  );
}else {
  default;
}