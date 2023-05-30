/*
Quando clicar no pokemon da listagem,temos que esconder o cartão do pokemon aberto e mostrar o cartão clicado;
Pra isso vamos precisar trabalhar com 2 elementos: (1)listagem (2)cartão do pokemon;
*/

//Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela;
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar com um evento de click feito pelo usuário na listagem de pokemons;
    
    pokemon.addEventListener('click', () =>{
  //Remover a classe aberto somente do cartão que está aberto;
    
  const cartaoPokemonAberto = document.querySelector('.aberto')
  cartaoPokemonAberto.classList.remove('aberto')

  //Ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar;
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-'+ idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')
    
    //Remover a classe ativo que marca o pokemon selecionado;

      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')

      //Adicionar a classe ativo no item da lista selecionado;
      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')

      
    })
})