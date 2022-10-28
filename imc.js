var titulo = document.querySelector(".titulo"); //pegando uma classe que se chama titulo
titulo.textContent = "Aparecida Nutriocinista";


var paciente = document.querySelector("#primeiro-paciente");// 3 = tralha -> Seletor de ID

//Nome
var tdNome = paciente.querySelector(".info-nome");
var nomePaciente = tdNome.textContent;

// Fazendo um loop para alterar todos os valores
var filaPacientes = document.querySelectorAll(".paciente");
//console.log(todosPacientes);

for (i = 0; i<filaPacientes.length; i++){
  //definição da passagem pelas variáveis
  paciente = filaPacientes[i];

  //nomePaciente
  var tdNome = paciente.querySelector(".info-nome");
  var nome = tdNome.textContent;


  //Peso
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  //console.log(peso);

  //Altura
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  //flags de controle peso e altura
  pesoEhValido = validaPeso(peso);
  alturaEhValida = validaAltura(altura);

  //IMC
  var tdImc = paciente.querySelector(".info-imc");
  tdImc.textContent = calculaImc(peso,altura);


  if (!pesoEhValido){
      paciente.classList.add("paciente-invalido");
      tdImc.textContent = "Peso inválido!";
      console.log("O paciente com peso é errado é " + nome);
  }

  if(!alturaEhValida){
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }


}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}
