//Async function

//Promises
test("the data is cereal", () => {
  return fetchData().then((data) => {
    expect(data).toBe("cereal");
  });
});

//Async Await
test("the data is peanut cereal", async () => {
  const data = await fetchData();
  expect(data).tobe("cereal");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is peanut cereal", async () => {
  await expect(fetchData()).resolves.toBe("cereal");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  return fetchData().catch((e) => expect(e).toMatch("error"));
});
