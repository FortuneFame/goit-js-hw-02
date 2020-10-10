//================================================== Создание =======================================================//

// // Пустой массив
// const arr = [];

// // Массив clients с тремя элементами
// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients); // ["Mango", "Poly", "Ajax"]

//============================================== Доступ к элементам =================================================//

// const clients = ['Mango', 'Poly', 'Ajax'];

// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

//================================================ Переопределение ==================================================//

// const clients = ['Mango', 'Poly', 'Ajax'];

// // Значение элемента можно заменить
// clients[0] = 'Kiwi';
// console.log(clients[0]); // Kiwi

// // Или добавить
// clients[3] = 'Alex';
// console.log(clients[3]); // Alex

// console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]

//================================================= Длина массива ====================================================//

// const clients = ['Mango', 'Poly', 'Ajax'];

// // length вернет текущую длину массива
// console.log(clients.length); // 3

// clients.length = 5;
// console.log(clients.length); // 5
// console.log(clients); // ["Mango", "Poly", "Ajax", empty × 2]
// console.log(clients[4]); // undefined

// clients.length = 2;
// console.log(clients); // ["Mango", "Poly"]

//============================================= Итерация по массиву ==================================================//

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']

//================================================ Цикл for...of =====================================================//

// // Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

//========================================= Инструкции break и continue ===============================================//

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Pol';
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

//=========================================== Многомерные массивы ==================================================//

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]); // 9

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

//====================================== Присвоение по ссылке и по значению =========================================//

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const a = ['Mango'];
// // Присвоение по ссылке.
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ['Mango']
// console.log(b); // ['Mango']

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push('Poly');
// console.log(a); // ['Mango', 'Poly']

// // b изменилось тоже, потому что b, как и a,
// // просто содержат ссылку на одино и то же место в памяти
// console.log(b); // ['Mango', 'Poly']

// // Результат повторяется
// b.push('Ajax');
// console.log(a); // ['Mango', 'Poly', 'Ajax']
// console.log(b); // ['Mango', 'Poly', 'Ajax']

//========================================== Методы split() и join() ==============================================//

// // split
// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]

// // join
// const clients = ['Mango', 'Poly', 'Ajax'];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); // "Mango Poly Ajax"
// console.log(clients.join(',')); // "Mango,Poly,Ajax"
// console.log(clients.join('-')); // "Mango-Poly-Ajax"

//==================================== Методы indexOf() и includes() ================================================//

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

//=============================== Проверка множественных условий с includes() =================================//

// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry') {
//   console.log('It is a red fruit!');
// }

// Выносим варианты в массив

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//   сonsole.log('It is a red fruit!');
// }

//=============================================== push и pop ===================================================//

// // Создаем пустой массив
// const stack = [];

// // Добавляем элементы в конец массива
// stack.push(1);
// console.log(stack); // [1]

// stack.push(2);
// console.log(stack); // [1, 2]

// stack.push(3);
// console.log(stack); // [1, 2, 3]

// // Удаляем элементы из конца массива
// console.log(stack.pop()); //  3
// console.log(stack); // [1, 2]

// console.log(stack.pop()); //  2
// console.log(stack); // [1]

// console.log(stack.pop()); //  1
// console.log(stack); // []

// console.log(stack.pop()); //  undefined

//================================================= shift() и unshift() ==========================================//

// const clients = ['Mango', 'Ajax', 'Poly'];

// console.log(clients.shift()); // Mango
// console.log(clients); // ["Ajax", "Poly"]

// clients.unshift('Kiwi');
// console.log(clients); // ["Kiwi", "Ajax", "Poly"]

//===================================================== Метод slice() ============================================//

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// // Вернет новый массив в котором будут
// // элементы с индексами от 1 до (clients.length - 1)
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]

// // Вернет копию исходного массива
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// // Вернет новый массив состоящих из последних двух элементом исходного
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

//=============================================== Удаление элементов массива ==========================================//

// // Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
// const scores = [1, 2, 3, 4, 5];

// // Следующая операция удаляет три элемента массива,
// // начиная с первого элемента (индекс 0).
// const deletedScores = scores.splice(2, 2, 6, 7);

// // Теперь массив scores содержит два элемента.
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента.
// console.log(deletedScores); // [1, 2, 3]

//================================================== Вставка элементов в массив ==========================================//

// // Предположим, что у вас есть массив с названиями цветов в виде строк.
// const colors = ['red', 'green', 'blue'];

// // Следующая операция помещает один новый элемент перед вторым элементом.
// colors.splice(2, 0, 'purple');

// // Теперь массив цветов содержит четыре элемента
// // с новым элементом, вставленным во вторую позицию.
// console.log(colors); // ["red", "green", "purple", "blue"]

// // Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
// colors.splice(1, 0, 'yellow', 'pink');

// console.log(colors);

//==================================================== Замена элементов массива ==========================================//

// // Предположим, у вас есть массив языков программирования из четырех элементов.
// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// // Следующая операция заменяет второй элемент на новый.
// languages.splice(1, 1, 'Python');

// // В массиве языков теперь все еще четыре элемента,
// // но второй элемент теперь «Python» вместо «C++».
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Вы можете заменить один элемент на несколько элементов,
// // передав больше аргументов
// languages.splice(2, 1, 'C#', 'Swift', 'Go');

// console.log(languages);
// // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

//========================================================= Метод concat() =============================================//

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);
// // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// console.log(oldClients);
// // ["Mango", "Ajax", "Poly", "Kiwi"]

// console.log(newClients);
// // ["Monkong", "Singu"]

//============================================ Функциональное выражение ==========================================//

// // a, b, c это параметры
// const add = function (a, b, c) {
//   return a + b + c;
// };

// // 1, 2, 3 это аргументы
// const result = add(1, 2, 3);
// console.log(result); // 6

// // 5, 10, 15 это аргументы
// console.log(add(5, 10, 15)); // 30

//============================================ Порядок выполения кода ==========================================//

// const fnA = function () {
//   console.log('Начала выполняться [fnA]');
//   fnB();
//   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };

// const fnB = function () {
//   console.log('Выполняется [fnB]');
// };

// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');

// /*
//  * Начал выполнение [main]
//  * Начала выполняться [fnA]
//  * Выполняется [fnB]
//  * Продолжила выполняться [fnA] после выхода из [fnB]
//  * Продолжил выполняться [main] после выхода из [fnA]
//  */

//============================================ Параметры по умолчанию ==========================================//

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
// count(); // countFrom = 0, countTo = 10, step = 1

//============================================ Псевдомассив arguments ==========================================//

// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15

//====================================== Способы преобразовать псевдомассив =======================================//

// const fn = function () {
//   // В переменной args будет полноценный массив
//   const args = Array.from(arguments);
// };

// const fn = function (...args) {
//   // В переменной args будет полноценный массив
// };

//============================================ Паттерн Guard Clause ==========================================//

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//   } else {
//     console.log('Операция снятия средств проведена.');
//   }
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

// const withdraw = function (amount, balance) {
//   /*
//    * Проверяется условие. Если оно выполняется, происходит
//    * console.log и выход из функции. Код идущий после тела if
//    * не выполнится.
//    */
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//     return;
//   }

//   /*
//    * Если условие первого if не выполнилось, его тело пропускается
//    * и интерпретатор доходит до этого if.
//    * Проверяется условие. Если оно выполняется, происходит
//    * console.log и выход из функции. Код идущий после тела if
//    * не выполнится.
//    */
//   if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//     return;
//   }

//   /*
//    * Если ни один из предыдущих if не выполнился,
//    * интерпретатор доходит до этого кода и выполняет его.
//    */
//   console.log('Операция снятия средств проведена.');
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.

//========================================= Объявление функции ==========================================//

// add(1, 2, 3); // 6
// print('text'); // text

// function add(a, b, c) {
//   return a + b + c;
// }

// function print(str) {
//   console.log(str);
// }

//========================================== Область видимости ==========================================//

// // Global scope

// function foo() {
//   // Local function scope of foo

//   if (true) {
//     // Local block scope
//   }

//   // Local function scope of foo

//   function bar() {
//     // Local function scope of bar
//   }

//   // Local function scope of foo
// }

// // Global scope

// const b = 10;

// const add = function () {
//   const a = 5;

//   return a + b;
// };

// add(); // 15

//============================================  Область видимости функции ==========================================//

// const value = 50;

// const add = function (num) {
//   const value = 10;
//   const innerValue = 5;

//   return num + value + innerValue;
// };

// // value объявлен глобально и поэтому доступен
// console.log(value); // 50

// console.log(add(20)); // 35

// // Ошибка, переменная innerValue не объявлена в этой области
// // видимости, она доступна только внутри фукции add
// console.log(innerValue);

//================================================ Стрелочные функции ============================================//

// // Обычное функциональное выражение
// const add = function (a, b, c) {
//   return a + b + c;
// };

// // Тоже самое записно как стрелочная функция
// const add = (a, b, c) => a + b + c;

// Если параметров несколько, то они перечисляются через запятую в круглых скобках.
// const fn = (a, b, c) => {
//   return a + b + c;
// };

// // Если параметр один, то он может быть без круглых скобок.
// const fn = x => {
//   return x * 2;
// };

// // Если параметров нет, то обязательно должны быть пустые круглые скобки.
// const fn = () => {
//   console.log('Hello! :]');
// };

// const fn = (a, b, c) => {
//   return a + b + c;
// };
// console.log(fn);

// const fn = (a, b, c) => a + b + c;

//===================================== Стрелочные функции и arguments =========================================//

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]

//======================================================================================//

