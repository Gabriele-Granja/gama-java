const livros = require('./database')
//console.log(livros)

//pegar o input

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//Se for sim, mostra as categorias disponiveis e pergunta qual categoria ela escohe
//Se não, mostra todos os livros em ordem crescente pela quantidade de páginas
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '/História brasileira','/Américas','/Estilo de vida','/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
   const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Essas são todas os livros disponíveis:')
    console.table(livrosOrdenados)
}