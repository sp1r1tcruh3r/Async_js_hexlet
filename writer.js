/*
writer.js

Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о завершении работы через переданный колбек.

import write from './writer';

write('./myfile', 'data', () => {
  console.log('success');
});
*/


import fs from 'fs';

// BEGIN (write your solution here)
export default (filepath, data, callback) => {
  fs.writeFile(filepath, data, callback);
};
// END
