/*
Реализуйте и экспортируйте асинхронную функцию compareFileSizes, которая сравнивает размеры двух файлов. Если первый больше второго, то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.

import { compareFileSizes } from './info';

compareFileSizes('file1', 'file2', (_err, result) => console.log(result));

Подсказка

    Для реализации этого задания, нужно воспользоваться функцией fs.stat, которая использовалась в примерах теории
    Math.sign
*/


export const compareFileSizes = (filepath1, filepath2, callback) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      callback(null, Math.sign(size1 - size2));
    });
  });
};
