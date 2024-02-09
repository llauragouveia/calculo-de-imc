function calcularIMC (peso, altura){
    var imc =peso / (altura * altura);
    return imc;
} 
var peso=parseFloat(prompt("Digite o peso em quilogramas :"));
if(isNaN(peso)||isNaN(altura)|| peso <= 0 || altura <= 0){
    console.log("Por favor, insira valores validos para peso e altura.")
}else{
    var imc = calcularIMC(peso,altura);
    console.log("Seu IMC é:"+ imc.toFixed(2));
}

