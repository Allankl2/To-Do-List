// Inicializando a lista com 7 espaços vazios (null)
let lista = [null, null, null, null, null, null, null];

// Função para inserir um valor na lista, se houver espaço vazio
function inserirNaLista(valor) {
    // Encontrar o primeiro índice com valor null (vazio)
    const indiceVazio = lista.indexOf(null);

    // Se encontrar um espaço vazio, insere o valor
    if (indiceVazio !== -1) {
        lista[indiceVazio] = valor;
        console.log(`Valor '${valor}' inserido na posição ${indiceVazio}.`);
    } else {
        // Caso contrário, a lista está cheia
        console.log("A lista está cheia.");
    }
}

// Testando a função
inserirNaLista("Novo Valor"); // Insere na primeira posição disponível
inserirNaLista(123); // Insere na próxima posição disponível
inserirNaLista(true); // Insere na próxima posição disponível
// Continue chamando a função até a lista ficar cheia
