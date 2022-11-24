//1. console.log
console.log(Number(console.log),String(console.log),Boolean(console.log));

//2.{ name: 'Maxim' }
console.log(Number({ name: 'Maxim' }), String({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));

//3.Symbol('key')
console.log(Number(Symbol('key')), String(Symbol('key')),Boolean(Symbol('key')));

//4.Number
console.log(Number(Number), String(Number), Boolean(Number));

//5.''
console.log(Number(''), String(''), Boolean(''));

//6. 0
console.log(Number(0), String(0), Boolean(0));

//7. -10
console.log(Number(-10), String(-10), Boolean(-10));

//8. '-105'
console.log(Number('-105'), String('-105'), Boolean('-105'));


