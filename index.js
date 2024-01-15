let userName = "Rosana"
let valeXP = 10001
let leven = ""

if (valeXP < 1000) {
    leven = "Ferro"
}else if (valeXP >= 1000 && valeXP <= 2000){
    leven = "Bronze"
}else if (valeXP >= 2001 && valeXP <= 5000){
    leven = "Prata"
}else if (valeXP >= 5001 && valeXP <= 7000){
    leven = "Ouro"
}else if (valeXP >= 7001 && valeXP <= 8000){
    leven = "Platina"
}else if (valeXP >= 8001 && valeXP <= 9000){
    leven = "Ascendente"
}else if (valeXP >= 9001 && valeXP <= 10000){
    leven = "Imortal"
}else {
    leven = "Radiante"
}

console.log ("O Herói de nome " + userName + " está no nível " + leven)