/*
ile.js

Реализуйте и экспортируйте асинхронную функцию getTypes, которая анализирует список переданных путей и возвращает массив (в промисе), с описанием того, что находится по каждому из путей:

import { getTypes } from './file';

getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]

Эта функция должна отрабатывать успешно в любом случае. Если во время выполнения асинхронной операции возникла ошибка, то значением для этого пути будет null. Для простоты считаем, что в эту функцию всегда передается как минимум один путь для обработки (иначе придется задействовать механизм, который проходится в курсах далее).
Подсказки

    fs.stat - информация о файле или директории. Для проверки на директорию используйте метод isDirectory.
    Методы then и catch не меняют сам промис, а возвращают новый
*/

const getTypeName = stat => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (paths) => {
  const [first, ...rest] = paths;
  const result = [];

  let promise = fs.stat(first)
    .then(data => result.push(getTypeName(data)))
    .catch(() => result.push(null));

  rest.forEach((path) => {
    promise = promise.then(() => fs.stat(path))
      .then(data => result.push(getTypeName(data)))
      .catch(() => result.push(null));
  });
  return promise.then(() => result);
};
