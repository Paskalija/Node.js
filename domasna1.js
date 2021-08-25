const cities =[
    {
        name: 'Marbella',
        population: '300000'
    },
    {
        name: 'Nice',
        population: '500000'
    },
    {
        name: 'Los Angeles',
        population: '700000'
    }
];
let minPopulation = 700000;
let nameOfCityMinPopulation = '';


cities.forEach(city => {
    if (parseInt(city.population) < minPopulation) {
        minPopulation = city.population;
        nameOfCityMinPopulation = city.name;
    }
});

console.log('City with smallest amount of people is: ' + nameOfCityMinPopulation);
console.log('With population of:' + minPopulation);
