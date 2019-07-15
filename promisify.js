//Promisifies any function that uses callbacks

const promisify = fn => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  );
export default promisify;
