import pokemon from "./data/pokemon/pokemon.js";
import searchInput from "./js/searchInput.js";

let pokeData = pokemon.pokemon;
//console.log (pokeData)
let container = document.getElementById("numbers-pokemons");
//container.insertAdjacentHTML("afterbegin" , "<p>Holi moli</p>");

//forEach recorre el array y realiza la funcion sobre cada elemento que lo compone
let showPokemons = (newPokemonArray) => {
  //newPokemonArray => es el nuevo array filtrado
  let dataOptions = newPokemonArray || pokeData;

  dataOptions.forEach((pokemon) => {
    let data = `<section class="cuadroPokemon">
  <div class="parteSuperior" id="parteSuperior"> 
  <div class = "container-num-region">
  
  <span class="infoleft" id="num">
  <img id ="pokebola" src="./assets/icons/pokebola.png"><span class="space"> </span>${pokemon.num //añadi un span entre la pokebola y numero para separar
      } </span> 
  <span class= "infoUp" id="region">${pokemon.generation.name}</span> 
  </div>
  <section class="photoStyle" id="photoStyle">
  <img id= "img" src=${pokemon.img} alt="pokemones"> 
  <div class = "circle" id= "circle"></div>
  </section>
    <h1 class="introCard" id="introCard"> ${pokemon.name} </h1> 
    </div>
    <section class=parteInferior id="parteInferior">
    <div class="type" id="type" disabled> ${pokemon.type
        .map((type) => `<span class="type-span ${type}" >${type}</span>`)
        .join("")}</div>
    </section>`;

    container.insertAdjacentHTML("beforebegin", data);

    /*creamos los siguientes arrays para nuestro buscador, de esta manera será dinamica*/
    /*Importamos elementos que utilizaremos para la funcionalidad de busqueda
    de pokemons para ello necesitaremos el contenedor de las cartas (showCards.js)*/

    const arrayContainerCards = document.querySelectorAll(".cuadroPokemon");
    const arrayNamePokemons = document.querySelectorAll(".introCard");

    searchInput.searchPokemonByName(arrayContainerCards, arrayNamePokemons);
  });
};


//let type= pokemonCards.filter(pokemon=> pokemon.type == "fire")
//console.log (type)

export default showPokemons;