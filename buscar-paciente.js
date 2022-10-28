var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("buscando pacientes");
    var xhr = new XMLHttpRequest(); // executando requisição
    // configurando qual método http utilizar e para qual servidor enviar
    //  requisição
    // utilizamos a função open
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    /*Para pegarmos a resposta quando a requisiçao HTTP
    voltar precisamos colocar um escutador de evento no próprio
    XMLHttpRequest, escutando o evento de load*/

    xhr.addEventListener("load", function() {
      //console.log(xhr.responseText);
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);// convertendo a string para json

    //percorrer o array de pacientes e adicionar cada um deles:
      pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
  });

    // por fim, para enviar a requisição chamamos o método send
     xhr.send();
});
