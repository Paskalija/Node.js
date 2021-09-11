
const cities = require('./data');
let minPopulation = Infinity;
let nameOfCityMinPopulation = '';
const eventEmitter = require('./email');

cities.forEach(city => {
  if (parseInt(city.population) < minPopulation) {
    minPopulation = city.population;
    nameOfCityMinPopulation = city.name;
  }
});

console.log('Least populated city is: ' + nameOfCityMinPopulation);
console.log('With population of: ' + minPopulation);

// 1. File-based modules (nie sami gi kreirame)
// 2. Core modules (doagjaat so nodejs)
// 3. External modules (treba da se instaliraat)

eventEmitter.emit('min_found', {name: 'Boban Sugareski',
email : 'bobansugareski@gmail.com',
Number:357357357});

