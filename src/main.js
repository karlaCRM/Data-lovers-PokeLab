//* data => trae el objeto pokemon con 251 de ellos*/
import data from "./data/pokemon/pokemon.js";

//* Aquí irá nuestros IMPORTS a archivos JS */
import carouselTypes from "./js/CarouselTypes.js";
import { showPokemons, showPokemonFeature } from "./showCards.js";
import {
  filterByType,
  filterByRegion,
  sortPokemons,
  sortNumber,
  findById
} from "./js/data.js";
import { cleanClass, validateInput } from "./js/functions.js";
import './js/graphics.js';

//* Llamamos a la función que mostrara la data*/
const subTitlePokemonsLength = document.getElementById("subtitle-result-pokemon");
let copyDataPokemon = [...data.pokemon];
showPokemons(copyDataPokemon);
showModal();
subTitlePokemonsLength.innerText = `(${copyDataPokemon.length} results)`


//* Importamos el contenedor donde añadiremos los tipos de pokemons */
const containerForCardTypes = document.getElementById("containerTypes");
carouselTypes.addTypesPokemon(containerForCardTypes);

//* Importamos los iconos del carusel */
const iconRigth = document.getElementById("img-carousel-rigth");
const iconLeft = document.getElementById("img-carousel-left");

//* Importamos el contenedor de cada tarjeta que muestra el tipo del pokemon*/
//*y lo convertimos en un array, esto nos permitira filtrar segun su nombre*//
const allCardTypes = document.querySelectorAll(".CardTypePokemon");
carouselTypes.functionalityCarousel(iconRigth, iconLeft, allCardTypes);

//let containerForCards = document.getElementById("pokemonsContainer");
const searchInputName = document.getElementById("input-search-name");
//?Recorremos el array de los contenedores que muestran los tipos y del que le den click traeremos su clase:

allCardTypes.forEach((cardType) => {
  cardType.addEventListener("click", () => {
    const nameType = cardType.className.split(" ")[0];
    console.log(nameType)
    //limpiar la clase borderRed asi en cada click la elimina
    cleanClass(allCardTypes);
    //añade la clase borderRed asi en cada click la elimina
    cardType.classList.add("borderRed");

    /*while (containerForCards.childNodes.length > 2) {
      containerForCards.removeChild(containerForCards.firstChild);
    }*/
    copyDataPokemon = filterByType(nameType, data.pokemon);
    //console.log(copyDataPokemon);
    showPokemons(copyDataPokemon);
    showModal();
    subTitlePokemonsLength.innerText = `(${copyDataPokemon.length} results)`

    /*aca reseteamos el selector por región y los sort a disabled selected */
    document.getElementById("regionName").selectedIndex = 0;
    document.getElementById("sort-by-Num").selectedIndex = 0;
    document.getElementById("sort-pokemons-by").selectedIndex = 0;
    document.getElementById("statistics-type-pokemon").selectedIndex = 0;

    //para limpiar el input del buscador.
    searchInputName.value = "";
    document.querySelector("#text-error").style.display = "none";
  });

});

/*Buscador de pokemon*/

searchInputName.addEventListener("input", () => {
  const arrayContainerCards = document.querySelectorAll(".cuadroPokemon");
  const arrayNamePokemons = document.querySelectorAll(".introCard");
  let inputValue = searchInputName.value.toLowerCase();
  if (validateInput(inputValue) || inputValue === "") {
    arrayNamePokemons.forEach((name, index) => {
      if (!name.innerText.toLowerCase().includes(inputValue)) {
        arrayContainerCards[index].classList.add("hideCard");
      } else {
        arrayContainerCards[index].classList.remove("hideCard");
      }
    });
    document.querySelector("#text-error").style.display = "none";
  } else {
    document.querySelector("#text-error").style.display = "flex";
  }
  showModal();
});

//** AQUI VA FILTRADO POR REGION */

const filterXRegion = document.getElementById("regionName");
let variableExtraKanto;
let variableExtraJohto;
//console.log(filterXRegion)

filterXRegion.addEventListener("change", () => {
  switch (filterXRegion.value) {
    case "all":
      copyDataPokemon = data.pokemon;
      showPokemons(data.pokemon);
      cleanClass(allCardTypes);
      subTitlePokemonsLength.innerText = `(${copyDataPokemon.length} results)`
      break;
    case "kanto":
      variableExtraKanto = filterByRegion(filterXRegion.value, copyDataPokemon);
      if(variableExtraKanto.length > 0){
        copyDataPokemon = variableExtraKanto;
        showPokemons(copyDataPokemon);
        subTitlePokemonsLength.innerText = `(${copyDataPokemon.length} results)`
      }else{
        alert ("No pokemon from Kanto");
      }
      break;
    case "johto":
      variableExtraJohto = filterByRegion(filterXRegion.value, copyDataPokemon);
      if(variableExtraJohto.length > 0){
        copyDataPokemon = variableExtraJohto;
        showPokemons(copyDataPokemon);
        subTitlePokemonsLength.innerText = `(${copyDataPokemon.length} results)`
      }else{
        alert ("No pokemon from Johto");
      }
      break;
  }

  showModal();
});

//** AQUI VAMOS A INSERTAR SORT DE A-Z Z-A */
const sortSelect = document.getElementById("sort-pokemons-by");

sortSelect.addEventListener("change", () => {
  switch (sortSelect.value) {
    case "default":
      copyDataPokemon = data.pokemon;
      showPokemons(data.pokemon);
      cleanClass(allCardTypes);
      subTitlePokemonsLength.innerText = `(${copyDataPokemon.length} results)`
      break;
    case "a-z":
      showPokemons(sortPokemons(copyDataPokemon));
      break;
    case "z-a":
      showPokemons(sortPokemons(copyDataPokemon).reverse());
      break;
  }
  showModal();
});

//*SORT POR NUMERO DE POKEDEX/

const sortNumberSelect = document.getElementById("sort-by-Num");

sortNumberSelect.addEventListener("change", () => {
  switch (sortNumberSelect.value) {
    case "00-MAX":
      showPokemons(sortNumber(copyDataPokemon));
      break;
    case "MAX-00":
      showPokemons(sortNumber(copyDataPokemon).reverse());
      break;
  }
  showModal();
});

//*FUNCION MOSTRAR MODAL/

function showModal() {
  const allCardPokemons = document.querySelectorAll(".cuadroPokemon");
  const closeModal = document.getElementById("close");
  allCardPokemons.forEach((cardPokemon) => {

    cardPokemon.addEventListener("click", () => {
      document.querySelector("#modal").style.display = "flex";
      const idPokemonCard = cardPokemon.className.split(" ")[0];
      //console.log(idPokemonCard)
      showPokemonFeature(findById(idPokemonCard, data.pokemon));
    });

    closeModal.addEventListener("click", () => {
      document.querySelector("#modal").style.display = "none"; 
    });
  });
}

//?MOSTRAR MODAL DE ESTADISTICA/
const statisticsSelect = document.getElementById("statistics-type-pokemon");
const closeModalStatistics = document.getElementById("close-statistics");
statisticsSelect.addEventListener("change", () => {
  switch (statisticsSelect.value) {
    case "statistics-by-type":
      //console.log("si es este")
      document.querySelector("#modal2").style.display = "flex";
      break;
  }
  closeModalStatistics.addEventListener("click", () => {
    document.querySelector("#modal2").style.display = "none";
    document.getElementById("statistics-type-pokemon").selectedIndex = 0;
    
  });
});





