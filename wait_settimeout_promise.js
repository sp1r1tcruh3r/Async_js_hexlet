/*

timer.js

Реализуйте таймер в виде промиса.

import wait from './timer';

wait(100).then(() => console.log('time is over!'));

Экспортируйте функцию по умолчанию.
*/


const wait = ms => new Promise(err => setTimeout(err, ms))
export default wait
