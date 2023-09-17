//Setup and Teardown
//Repeating

beforeEach(() => {
  initializaCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city db has patna", () => {
  expect(isCity("patna")).toBeTruthy();
});

test("city db has bangalore", () => {
  expect(isCity("bangalore")).toBeTruthy();
});
