//Strings

test("Jest is fun", () => {
  expect("Jest").not.toMatch(/boring/);
});

test("testing", () => {
  expect("testing").toMatch(/ing/);
});
