const eventEmitter = require('./email');
const cities = require('./data');
let maxPopulation = 0;
let nameOfCityMaxPopulation = '';

const mail = () => {
  console.log('Mailot e ispraten');
}

cities.forEach(city => {
  if (parseInt(city.population) > maxPopulation) {
    maxPopulation = city.population;
    nameOfCityMaxPopulation = city.name;
  }
});


eventEmitter.emit('max_found', { name: 'Boban Sugarevski',
email: 'bobansugarevski@gmail.com',
Number: 357357357});


console.log('City with biggest amount of stupid people is: ' + nameOfCityMaxPopulation);
console.log('With population of: ' + maxPopulation);
