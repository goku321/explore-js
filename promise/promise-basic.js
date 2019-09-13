// Returns the value wrapped inside promise object
let fifteen = Promise.resolve(15);
console.log(typeof(fifteen))

// `then` registers a callback to be called when promise gets resolved
fifteen.then(value => console.log(`Got ${value}`));
// -> Got 15