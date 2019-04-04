// greeter.ts
exports.greeter = function (person: string) {
  return `Hello ${person}!`;
};
console.log(exports.greeter('Tetiana'));
