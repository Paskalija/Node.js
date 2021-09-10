const cities = require ('./app');

let maxPopulation = 0;
let nameOfCityMaxPopulation = '';

cities.forEach(city => {
    if (parseInt(city.population) > maxPopulation) {
        maxPopulation = city.population;
        nameOfCityMaxPopulation = city.name;
    }
});

console.log('City with amount of nice people is' + nameOfCityMaxPopulation);
console.log('With population of' + maxPopulation); 