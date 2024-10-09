let generoFilme = prompt("Qual gênero de filme você quer assistir? Ação, Aventura, Terror, Comédia, Romance?").toLowerCase();

// Arrays para os filmes de acordo com o gênero deles
let acao = [" Batman - O Cavaleiro Das Trevas", " Vingadores: Ultimato"," Vingadores: Guerra Infinita"," Gladiador", " Bastardos Inglórios."];
let aven = [" O Rei Leão", " O Senhor dos Anéis - O Retorno do Rei", " O Auto da Compadecida", " De Volta para o Futuro."];
let terror = [" O Exorcista", " Invocação do Mal", " Alien - O 8º Passageiro", " Noites Brutais" , " Hereditário."];
let comedia = [" Forrest Gump - O Contador de Histórias", " A Vida é Bela", " Intocáveis", " Toy Story - Um Mundo de Aventuras" , " Toy Story 3."];
let romance = [" É Assim Que Acaba", " Coringa: Delírio a Dois", " Golpe de Sorte em Paris", " Minha Culpa", " Cinquenta Tons de Cinza."];

switch (generoFilme){
  case "ação":
    console.log(`Você pode assistir esses filmes: ${acao}`);
    break;
  case "aventura":
    console.log(`Você pode assistir esses filmes: ${aven}`);
    break;
  case "terror":
    console.log(`Você pode assistir esses filmes: ${terror}`);
    break;
  case "comédia":
    console.log(`Você pode assistir esses filmes: ${comedia}`);
    break;
  case "romance":
    console.log(`Você pode assistir esses filmes: ${romance}`);
    break;
    
  default:
    console.log(`Gênero não encontrado, coloque uma das opções mostradas`)
}

