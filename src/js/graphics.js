import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'
import data from "../data/pokemon/pokemon.js"
import {reductionXType} from './data.js';


/* variables para  chart.js */
const arrayOfTypes = data.pokemon.map((item) => item.type).flat()
const reductionOfArray = reductionXType(arrayOfTypes)
const labelsXType= Object.keys(reductionOfArray)
const valuesXType= Object.values(reductionOfArray)


const canvas = document.getElementById("canvas");
 //mostrarmos grafico de barras.
new Chart(canvas,  {//eslint-disable-line
    type: 'bar',
    data: {
        labels: labelsXType,
        datasets: [{
            label: '# Pokemons By Type',
            data: valuesXType,
            backgroundColor: [
                '#3B9D32',
                '#62087C',
                '#FD2020',
                '#5985D8',
                '#219CE1',
                '#92BD2D',
                '#838383',
                '#F2CF0C',
                '#DF733C',
                '#D73354',
                '#FF6B67',
                '#B19526',
                '#39C0A9',
                '#4455B7',
                '#0C6AC8',
                '#DB4ECD',
                '#595761',
                '#308497'
            ],
            borderColor: [
                '#3B9D32',
                '#62087C',
                '#FD2020',
                '#5985D8',
                '#219CE1',
                '#92BD2D',
                '#838383',
                '#F2CF0C',
                '#DF733C',
                '#D73354',
                '#FF6B67',
                '#B19526',
                '#39C0A9',
                '#4455B7',
                '#0C6AC8',
                '#DB4ECD',
                '#595761',
                '#308497'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

/*mostrar información */
const containerStadistic = document.getElementById("show-info-type-pokemon")

for (const prop in reductionOfArray) {
    containerStadistic.innerHTML += `<p class="${prop} info-stidistic">${prop}: <span class="value">${reductionOfArray[prop]}</span></p>`;
}