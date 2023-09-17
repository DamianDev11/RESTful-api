//Exceptions

function compileAndroidCode() {
  throw new Error("wrong JDK");
}

test("compilation", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  expect(() => compileAndroidCode()).toThrow("wrong JDk");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
