/*

file.js

Реализуйте и экспортируйте асинхронную функцию reverse, которая меняет строчки в файле в обратом порядке

import { reverse } from './file';

// До
// one
// two
reverse(filepath);

// После
// two
// one

*/

/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const reverse = filepath => fs.readFile(filepath, 'utf-8')
  .then(data => fs.writeFile(filepath, data.split('\n').reverse().join('\n')));
// END
