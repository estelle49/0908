setTimeout(() => {
  console.log(1)
})
setImmediate(() => {
  console.log(2);
})
Process.nextTick(() => {
  console.log(3);
})
Promise.resolve()
  .then(() => {})
console.log();