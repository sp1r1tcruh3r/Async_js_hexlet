/*
file.js

Реализуйте и экспортируйте асинхронную функцию getDirectorySize, которая считает размер переданной директории (не включая поддиректории).

import { getDirectorySize } from './file';

getDirectorySize('/usr/local/bin').then(console.log);

Подсказка

    fs.readdir - чтение содержимого директории
    path.join - конструирует пути
    fs.stat - информация о файле
    _.sumBy - нахождение суммы в массиве
*/
//С читами)))
export const getDirectorySize = async dirpath => {
  const reader = await fs.readdir(dirpath);
  const filepaths = reader.map(name => path.join(dirpath, name));
  const stats = filepaths.map(elem => fs.stat(elem));
  let doneStats = await Promise.all(stats);
  let sum = await _.sumBy(doneStats.filter(stat => stat.isFile()), "size");
  return sum;
};

/* eslint-disable import/prefer-default-export */
import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';
// без читов
// BEGIN
export const getDirectorySize = (dirpath) => {
  const promise = fs.readdir(dirpath).then((filenames) => {
    const filepaths = filenames.map(name => path.join(dirpath, name));
    const promises = filepaths.map(fs.stat);
    return Promise.all(promises);
  });

  return promise.then(stats => _.sumBy(stats, 'size'));
};
// END
