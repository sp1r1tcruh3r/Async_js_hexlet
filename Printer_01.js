/*
printer.js

Реализуйте асинхронную функцию, которая читает данные файла по указанному пути и выводит их в консоль.

import print from './printer';
print('./myfile');
*/
/* eslint-disable no-console */
import fs from 'fs';

// BEGIN (write your solution here) (write your solution here)
const printer = file => {
const callback = (error, data) => console.log(data);
let z = fs.readFile(file, 'utf-8', callback)

};
export default printer;
// END
export default filepath => fs.readFile(
  filepath,
  'utf-8',
  (error, data) => console.log(data),
);
