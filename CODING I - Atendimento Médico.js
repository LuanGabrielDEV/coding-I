const atendimento = prompt("Olá, gostaria de marcar uma consulta? (sim/não)").toLowerCase();

if (atendimento === "sim") {
    // Lista de especialidades disponíveis
    const especialidadesDisponiveis = [" cardiologia", " pediatria", " neurologia", " oftalmologia", " ginecologia", " dermatologia"];

    let especialidade = prompt(`Para qual especialidade você quer marcar? ${especialidadesDisponiveis}`);
 
    let data = prompt("Para qual dia da semana? (não atendemos aos domingos)");
    console.log(`Sua consulta de ${especialidade} está marcada para ${data}`);

  } else if (atendimento === "não") {
    console.log("Certo, tenha um bom dia");
   } else {
    console.log("Por favor, digite 'sim' ou 'não'.");
}
