//Arrays and iterables

const shopList = ["banana", "apple", "cheese", "dam"];

TextDecoderStream("the shoppung list has dam on it", () => {
  expect(shopList).toContain("dam");
  expect(new Set(shopList)).toContain("dam");
});
