//1. Примитивы (простые типы) - 7
//2. Не Примитивы сложные тип) - 1 (object)


//1.string
const favoriteDrink ='Beer';
console.log( favoriteDrink);

//2.number
const numberOfCups = 2;
console.log(numberOfCups);

//3. boolean
const isColdDrink = true;
console.log(isColdDrink);

//5. null - пусто, значение не известно
const studentFavoriteDrink = null;
console.log(studentFavoriteDrink);

//5. undefined - значение не было присвоено
let carOwner;
console.log(carOwner);

//6. object
const drink = {
    favoriteDrink: 'Beer',
    numberofCups: 2,
    isColdDrink: true,
};
console.log(drink);

//7. symbol
const id =Symbol('id');
console.log(id);

//8. bigint - большое число -(2^53-1)
const bigIntNumber = 100n;
console.log(bigIntNumber);