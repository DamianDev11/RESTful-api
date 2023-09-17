function mul(a, b) {
  return a * b;
}

const result = mul(4, 5);
const expected = 20;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
