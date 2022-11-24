//1.number - числовое значение
let oneRing = 1;
console.log(Number(oneRing),Boolean(oneRing),String(oneRing));

//2. string - строка
let mage = 'Gandalf';
console.log(Number(mage),Boolean(mage),String(mage));

//3. boolean - да/нет, истина/ложь
let frodoHobbit = true;
console.log(Number(frodoHobbit),Boolean(frodoHobbit),String(frodoHobbit));

//4. null - пусто, значение не известно
let sauronReturn = null;
console.log(Number(sauronReturn), Boolean(sauronReturn), String(sauronReturn));

//5. undefined - значение не было присвоено
let ringOwner;
console.log(Number(ringOwner), Boolean(ringOwner), String(ringOwner));

//6. object - набор ключей/значений
let lordOfTheRings = {
    mage: 'Gandalf',
    oneRing: 1,
    frodoHobbit: true,
};
console.log(lordOfTheRings);

//7. symbol- Можно спользовать только строки и символы
let id =Symbol('id');
console.log(Boolean(id), String(id));
// symbol нельзя преобразить к типу данных number

//8.bigint - большое число
let ageElrond = 3500n;
console.log(Number(ageElrond), Boolean(ageElrond),String(ageElrond));

