const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];

    const names = superheroes.map( superheroes => superheroes.name);
    console.log(names)

    const lightWeight = superheroes.filter ( superheroes => superheroes.weight < 190)
    const lightArray = lightWeight.map(superheroes => superheroes.name)
    
    console.log(lightArray)

    const weight200 = superheroes.filter(superheroes =>  superheroes.weight == 200)
    .map(superheroes => superheroes.name);
    console.log(weight200);

    const firstApp = superheroes.map (superheroes => superheroes.first_appearance);
    console.log(firstApp)

    const dcComics = superheroes.filter(superheroes => superheroes.publisher === 'DC Comics')
                    .map(superheroes => superheroes.name);

    console.log(dcComics)
    const marvelComics = superheroes.filter(superheroes => superheroes.publisher === 'Marvel Comics')
                    .map(superheroes => superheroes.name);
                    
    console.log(marvelComics);

    const dcComicsWeight = superheroes.filter(superheroes => superheroes.publisher === 'DC Comics')
    .map(superheroes =>superheroes.weight !== "unknown" ? parseInt(superheroes.weight, 10) : 0)

    .reduce ((accumulator, currentValue) => accumulator + currentValue);
    console.log(dcComicsWeight)

    const marvelWeight = superheroes.filter(superheroes => superheroes.publisher === 'Marvel Comics')
    .map(superheroes =>superheroes.weight !== "unknown" ? parseInt(superheroes.weight, 10) : 0)

    .reduce ((accumulator, currentValue) => accumulator + currentValue);
    console.log(marvelWeight);

    


//     const result = superheroes.find( ({ name }) => name === 'Spiderman' );
// console.log(result);


// const doubleArrayValues = [1,2,3];
// let double =  doubleArrayValues.map(x => x * 2);
// console.log(double);

// const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11].some(x => x > 10)
// console.log(containsNumberBiggerThan10)

// const containsNumberBiggerThan9 = 
// [1,2,1,2,1,2].some (x=> x >9)
// console.log(containsNumberBiggerThan9)

// const isItalyInTheGreat7= ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
// let containItaly = isItalyInTheGreat7.includes('Italy');
// console.log(containItaly)

// const numbers = [1,2,3,4,5,6,7];
// let times10 = [];

// numbers.forEach(number => times10.push(number * 10));
// console.log(times10)


// const isBelow100 =[ 1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
// const below100 = (currentValue) => currentValue < 100;
// console.log(isBelow100.every(below100));

// const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]
// let sum = (accumulator, currentValue) => accumulator + currentValue;
// console.log(bigSum.reduce(sum));