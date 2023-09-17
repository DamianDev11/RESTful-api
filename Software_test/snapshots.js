import renderer from "react-test-renderer";

test("Mycomponent should render correctly", () => {
  const component = renderer.create(<Mycomponent />).toJSON();
  expect(component).toMatchSnapshot();
});

test("myFunction should return the correct value", () => {
  expect(myFunction()).toMatchSnapshot();
});

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="https://example.com">Exaample Site</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot();
});
