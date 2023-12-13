import { Select } from "./Select";
import { render, screen } from "@testing-library/react";

// describe(Select, () => {
//   it("should render successfully", () => {
//     const options = [
//       {
//         value: 10,
//         label: "10",
//       },
//     ];
//     render(<Select options={options} />);
//     const label = screen.getAllByText("10");
//     expect(label).toBeInTheDocument();
//   });
// });

it("Should render default value", () => {
  const options = [
    {
      value: 10,
      label: "10",
    },
  ];
  render(<Select options={options} defaultValue={options[0]} />);
  expect(screen.getByTestId("selected-value").textContent).toEqual("10");
});
