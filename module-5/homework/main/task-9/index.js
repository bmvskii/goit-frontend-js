const animals = ['pig', 'dog', 'cat', 'parrot', 'chicken'];
const pets = animals.splice(1, 3);

pets.splice(-1, 1);
pets.splice(2, 0, 'shark', 'elephant');

console.log(pets);