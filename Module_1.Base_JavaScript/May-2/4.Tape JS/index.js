// JavaScript имеет динамическую типизацию

//1. Преобразование к string
const age = 20;
console.log('number age', typeof age);
console.log('string age', typeof String(age)); //явное преобразование

const updatedAge = '1' + 20;// неявное преобразование
console.log('updatedAge', typeof updatedAge);

//2. Преобразование к number
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript', typeof experienceInJavaScript);
console.log('number experienceInJavaScript', typeof Number(experienceInJavaScript)); //явное

console.log('experienceInJavaScript',typeof +experienceInJavaScript); // не явное

console.log('Hello Weorld', Number('Hello Weorld'));

//3. Преобразование к boolean
console.log('hello', Boolean('hello'));
console.log('5', Boolean(5));

console.log('null', Boolean(null));
console.log('undefined', Boolean(undefined));

console.log('0', Boolean(0));
console.log('', Boolean());

// null, undefined, NaN, 0, ' '



