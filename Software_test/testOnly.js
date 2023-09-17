//test.only

test.only("this will only be run", () => {
  expect(true).toBe(false);
});

test("this test will not run", () => {
  expect(A).toBe("A");
});
