function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

expect(add(4, 5)).toBe(9);
expect(add(4, 5, 1)).toBe(10);
function add(...numbers) {
  let sum = 0;
  for (let num in numbers) {
    sum += num;
  }
  return sum;
}
