/*
Реализуйте и экспортируйте асинхронную функцию getDirectorySize, которая считает размер переданной директории (не включая поддиректории). Анализ размера файла должен происходить паралелльно, для этого воспользуйтесь библиотекой async

import { getDirectorySize } from './info';

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});

Подсказка

    fs.readdir - чтение содержимого директории
    path.join - конструирует пути
    async.map
    fs.stat - информация о файле
    _.sumBy - нахождение суммы в массиве
*/
/* eslint-disable import/prefer-default-export */
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN (write your solution here)
export const getDirectorySize = (dirpath, cb) => {
  fs.readdir(dirpath, (error1, filenames) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = filenames.map(name => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (error2, stats) => {
      const sum = _.sumBy(stats.filter(stat => stat.isFile()), 'size');
      cb(error2, sum);
    });
  });
};

// END
