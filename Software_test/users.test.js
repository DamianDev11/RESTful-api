import axios from "axios";
import Users from "./mockingmodules";

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "dam" }];
  const resp = { data: users };
  axios.get.mockResolvedData(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});
