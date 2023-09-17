function mul(a, b) {
  return a * b;
}

expect(mul(4, 5)).toBe(20);

function expect(actual) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}
