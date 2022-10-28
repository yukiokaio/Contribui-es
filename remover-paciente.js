var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

//cada filho escutando o evento
/*
pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick", function(){
    console.log("fui clicado duas vezes");
    this.remove();// palavra de contexto para quem chamou e é o dono do evento

  });
*/

// Apenas o pai escutando o evento
var table = document.querySelector("table");

table.addEventListener("dblclick", function(){

    console.log(event.target);// descobrindo quem foi clicado ex: TD
    event.target.parentNode.remove();// removendo o paciente que foi clicado = TR

  });
