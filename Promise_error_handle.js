/*

file.js

Реализуйте и экспортируйте асинхронную функцию touch, которая создает файл если его не существует.

import { touch } from './file';

touch('/myfile').then(() => console.log('created!'));

Подсказка

    fs.access - проверка сущестования файла

*/

/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const touch = filepath => fs.access(filepath)
.catch(err=>console.log(err))
.then(()=>fs.writeFile(filepath, 'content'))
.catch(err=>console.log(err))
// END

/*
import { promises as fs } from 'fs';

// BEGIN
export const touch = filepath => fs.access(filepath)
  .catch(() => fs.writeFile(filepath));
// END
*/
