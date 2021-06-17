const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}];

    
    const result = superheroes.find( ({ name }) => name === 'Spiderman' );
console.log(result);


const doubleArrayValues = [1,2,3];
let double =  doubleArrayValues.map(x => x * 2);
console.log(double);

const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11].some(x => x > 10)
console.log(containsNumberBiggerThan10)

const containsNumberBiggerThan9 = 
[1,2,1,2,1,2].some (x=> x >9)
console.log(containsNumberBiggerThan9)

const isItalyInTheGreat7= ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
let containItaly = isItalyInTheGreat7.includes('Italy');
console.log(containItaly)

const numbers = [1,2,3,4,5,6,7];
let times10 = [];

numbers.forEach(number => times10.push(number * 10));
console.log(times10)


const isBelow100 =[ 1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
const below100 = (currentValue) => currentValue < 100;
console.log(isBelow100.every(below100));

const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
let sum = (accumulator, currentValue) => accumulator + currentValue;
console.log(bigSum.reduce(sum));