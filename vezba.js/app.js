const cities = [
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

let maxPopulation = 0;
let nameOfCityMaxPopulation = '';

cities.ForEach(city => {
    if (parseInt(city.population) > maxPopulation) {
        maxPopulation = city.population;
        nameOfCityMaxPopulation = city.name;
    }
});

console.log('City with amount of nice people is' + nameOfCityMaxPopulation);
console.log('With population of' + maxPopulation);