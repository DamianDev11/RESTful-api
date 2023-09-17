//callbacks

//dont do this

test("the data is cereal", () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe("cereal");
  }
});

//do this
test("the data is cereal", (done) => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe("cereal");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
