//scoping

beforeEach(() => {
  return initializaCityDatabase();
});

test("city db has patna", () => {
  expect(isCity("patna")).toBeTruthy();
});

test("city db has bangalore", () => {
  expect(isCity("bangalore")).toBeTruthy();
});

describe("matching cities to food", () => {
  beforeEach(() => {
    return initializaCityDatabase();
  });

  test("patna real", () => {
    expect(isValidCityFoodPair("patna", "delhi")).toBeTruthy();
  });

  test("namma bangaluru ", () => {
    expect(isValidCityFoodPair("bangalore", "chennai")).toBeTruthy();
  });
});
