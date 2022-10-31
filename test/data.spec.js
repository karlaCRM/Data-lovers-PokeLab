import {
  filterByType,
  filterByRegion,
  sortPokemons,
  sortNumber,
  findById,
  reductionXType,
} from "../src/js/data.js";

let randomArrayToTestTheTest = [
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
  {
    num: "010",
    name: "caterpie",
    type: "bug",
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
  {
    num: "011",
    name: "metapod",
    type: "bug",
    generation: {
      num: "generation i",
      name: "johto",
    },
  },
  {
    num: "078",
    name: "rapidash",
    type: "fire",
    generation: {
      num: "generation i",
      name: "johto",
    },
  },
  {
    num: "081",
    name: "magnemite",
    type: "electric",
    generation: {
      num: "generation i",
      name: "johto",
    },
  },
];

let bugPokemon = [
  {
    num: "010",
    name: "caterpie",
    type: "bug",
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
  {
    num: "011",
    name: "metapod",
    type: "bug",
    generation: {
      num: "generation i",
      name: "johto",
    },
  },
];

let firePokemon = [
  {
    num: "078",
    name: "rapidash",
    type: "fire",
    generation: {
      num: "generation i",
      name: "johto",
    },
  },
];

//primeros test, arriba se coloca info de prueba para testear
describe("filterByType", () => {
  it("es una function", () => {
    expect(typeof filterByType).toBe("function");
  });

  it("returns an array of objects containing only the pokemon with the correct type BUG", () => {
    expect(filterByType("bug", randomArrayToTestTheTest)).toEqual(bugPokemon);
  });

  it("returns an array of objects containing only the pokemon with the correct type FIRE", () => {
    expect(filterByType("fire", randomArrayToTestTheTest)).toEqual(firePokemon);
  });
});

// AQUI VAMOS A TESTEAR NUESTRO FILTRO REGION
let filtradosKanto = [
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
  {
    num: "010",
    name: "caterpie",
    type: "bug",
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
];

describe("filterByRegion", () => {
  it("es una function", () => {
    expect(typeof filterByRegion).toBe("function");
  });

  it("returns an array of objects containing only the pokemon with the correct region KANTO", () => {
    expect(filterByRegion("kanto", randomArrayToTestTheTest)).toEqual(
      filtradosKanto
    );
  });
});

// TEST DE SORT A-Z

let sortData = [
  {
    num: "010",
    name: "caterpie",
    type: "bug",
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
];

let sortDataAZ = [
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
  {
    num: "010",
    name: "caterpie",
    type: "bug",
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
];
let sortDataZA = [
  {
    num: "010",
    name: "caterpie",
    type: "bug",
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    generation: {
      num: "generation i",
      name: "kanto",
    },
  },
];


describe("sortPokemons", () => {
  it("es una function", () => {
    expect(typeof sortPokemons).toBe("function");
  });

  it("Debe retornar ordenados de A-Z", () => {
    expect(sortPokemons(sortData)).toEqual(sortDataAZ);
  });

  it("Should return an array of Z-A", () => {
    expect(sortPokemons(sortData).reverse()).toEqual(sortDataZA)
  })
});



//TEST SORT NÚMEROS

let arraySortNumbers = [
  { num: "012" },
  { num: "120" },
  { num: "024" },
  { num: "003" },
];

let arraySortMinMax = [
  { num: "003" },
  { num: "012" },
  { num: "024" },
  { num: "120" },
];

let arraySortMaxMin = [
  { num: "120" },
  { num: "024" },
  { num: "012" },
  { num: "003" },
];

describe("sortNumber", () => {
  it("es una function", () => {
    expect(typeof sortNumber).toBe("function");
  });

  it("Debe retornar ondenados de min al max", () => {
    expect(sortNumber(arraySortNumbers)).toEqual(arraySortMinMax);
  });

  it("Should return an array of max to min", () =>{
    expect(sortNumber(arraySortNumbers).reverse()).toEqual(arraySortMaxMin)
  })
});

 

// AQUI VA EL TEST DE FIND

let findResult=
{
  num: "011",
  name: "metapod",
  type: "bug",
  generation: {
    num: "generation i",
    name: "johto",
  }
}


describe("findById", () =>{
  it("es una funcion find", () =>{
    expect (typeof findById).toBe("function");
  });
  
  it("deberia retornar el primer elemento que coincida con el id del pokemon en especifico", () =>{
    expect(findById("011", randomArrayToTestTheTest)).toEqual(findResult);
  });
})

//TEST REDUCE TYPE POKEMON
const arraydata = [
  "gato", "perro", "raton", "perro", "raton", "conejo","gato", "perro", "hamster", "perro"
];

const objData ={
  "gato": 2,
  "perro": 4,
  "raton": 2,
  "conejo": 1,
  "hamster":1
}

describe("reductionXType", () => {
  it("es una function", () => {
    expect(typeof reductionXType).toBe("function");
  });

  it("deberia retornar un objeto con propiedades y valor", () =>{
    expect(reductionXType(arraydata)).toEqual(objData);
  });

});
