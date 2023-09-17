it("will fail every time", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "Lebron James",
  };

  expect(user).toMatchSnapshot();
});

//snapshot
exports["will fail everytime 1"] = `
Object {
    "createdAt":2020-10-09T12:00:00Z,
    "id":3,
    "name":"LeBron James",
}`;

//

it("will fail every time", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "Lebron James",
  };

  expect(user).toMatchSnapshot();
  createdAt: expect.any(Date);
  id: expect.any(Number);
});

exports["will check the matchers and pass 1"] = `
Object {
    "createdAt":any<Date>,
    "id":any<Number>,
    "name":"LeBron James",
}`;
