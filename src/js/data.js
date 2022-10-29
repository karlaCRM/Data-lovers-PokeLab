// estas funciones relizan solo una cosa.


export const filterByType = (nameType, pokemonData) => {
  const filterType = pokemonData.filter((pokemon) =>
    pokemon.type.includes(nameType)
  );
  //console.log(filterType);
  return filterType;
};

export const filterByRegion = (selection, pokemonData) => {
  const filteredRegion = pokemonData.filter(
  (pokemon)=> pokemon.generation.name == selection);
  return filteredRegion;
};

//*aqui va el sort*/

export const sortPokemons = (pokemonData) => {
  let copyarray = [...pokemonData];
  const pokemonSort = copyarray.sort((prev, next) => {
    if (prev.name < next.name) {
      return -1;
    } 
    
  });
  return pokemonSort;
};


export const sortNumber = (pokemonData)=>{
  const sortByNumber= pokemonData.sort((min,max)=>{
    if(min.num < max.num){
      return -1
    } if (min.num > max.num){
      return 1
    } 
  });
  return sortByNumber
};

//*aqui va el find*/

export const findById = (id, pokemonData) => {
  const findbyidPokemon = pokemonData.find(
  (pokemon)=> pokemon.num == id);
  console.log(findbyidPokemon);
  return findbyidPokemon;
};