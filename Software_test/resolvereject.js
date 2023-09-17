//resolves and rejects

test("the data is peanut cereal", () => {
  expect(fetchData()).resolves.toBe("cereal");
});

test("the fetch fails with an error", () => {
  expect(fetchData()).rejects.toMatch("error");
});
