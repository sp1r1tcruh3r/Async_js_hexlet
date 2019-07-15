/*

watcher.js

Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит за изменением файла. Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек. Параметры функции:

    Путь до файла, который нужно отслеживать
    Период отслеживания
    Колбек, который принимает на вход только ошибку

import watch from './watcher';

const id = watch(filepath, 500, (err) => {
  console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);

Реализуйте эту логику используя функцию setInterval. Функция должна возвращать наружу идентификатор таймера. Если во время анализа файла (через fs.stat) произошла ошибка, то нужно остановить таймер и вызвать колбек, передав туда ошибку.
Подсказки

    stats.mtimeMs — время последнего изменения
    Date.now() — текущая дата
    clearInterval

*/
// BEGIN
const check = (timerId, filepath, period, cb) => {
  fs.stat(filepath, (err, stat) => {
    if (err) {
      clearInterval(timerId);
      cb(err);
      return;
    }
    if ((Date.now() - stat.mtimeMs) < period) {
      cb(null);
    }
  });
};

export default (filepath, period, cb) => {
  const timerId = setInterval(() => check(timerId, filepath, period, cb), period);
  return timerId;
};
// END
