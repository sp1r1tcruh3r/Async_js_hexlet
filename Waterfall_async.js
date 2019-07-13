/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import { waterfall } from 'async';
/*
// BEGIN
export const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall([
    callback => fs.readFile(inputPath1, callback),
    (data1, callback) => fs.readFile(inputPath2, (err, data2) => callback(err, data1, data2)),
    (data1, data2, callback) => fs.writeFile(outputPath, `${data1}${data2}`, callback),
  ], cb);
};
// END
*/
/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import { waterfall } from 'async';

// BEGIN (write your solution here)

export function unionFiles(inputPath1, inputPath2, outputPath, cb) {

  function readFirst (callBack) {
    fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
      if (error1) {
        cb(error1);
        return;
      };
      callBack(null, data1);
    });
  }

  function readSecond (data1, callBack) {
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      };
      callBack(null, data1, data2);
    });
  }

  function write (data1, data2, callBack) {
    fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
      if (error3) {
        cb(error3);
        return;
      };
      cb(null);
    })
  }

waterfall([readFirst, readSecond, write], cb);
}
