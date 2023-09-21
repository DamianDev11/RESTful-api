export default function sum(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

if (import.meta.vitest) {
  describe("#sum", () => {
    test.concurrent("2+3=5", () => {
      expect(sum(2, 3)).toBe(5);
    });

    it.concurrent(
      "return same number with one number",
      () => {
        //skip or only
        expect(sum(3)).toBe(3);
      },
      1000
    );
    it.concurrent("returns the sum with multiple numbers", () => {
      expect(sum(1, 2, 3)).toBe(6);
    });
  });
}
