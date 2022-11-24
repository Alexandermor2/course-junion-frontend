//string - Строка
const myCar = 'Lada';
console.log('myCar', myCar, typeof myCar);

// number - число для целых, с плавающей точкой и для чисел с ограниченым диапазоном

const age = 4;
console.log('age',age, typeof age);

//boolean "true/false"- правдв или ложь
const carRed = false;
console.log('carRed', carRed, typeof carRed);

//null - неизвестное значение
const dateOfFailure = null;
console.log('dateOfFailure',dateOfFailure,typeof dateOfFailure);

//undefined - для неприсвоенных значений
const dateOfSale = undefined;
console.log('dateOfSale',dateOfSale,typeof dateOfSale);

//object - cложная структура данных
const car = {
    myCar: 'Lada',
    age: 4,
    carRed: false,
};
console.log(car);

//symbol - индификатор только для строки и символов
const id =Symbol('id');
console.log('id',id, typeof id);

//bigint - большие целые числа
const bigIntNumber = BigInt(10);
console.log('bigIntNumber',bigIntNumber,typeof bigIntNumber);

