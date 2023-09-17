//one time setup

beforeALl(() => {
  return initializaCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city db has patna", () => {
  expect(isCity("patna")).toBeTruthy();
});

test("city db has bangalore", () => {
  expect(isCity("bangalore")).toBeTruthy();
});
