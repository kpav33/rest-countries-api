import { render, screen } from "@testing-library/react";
import FilterByRegion from "../FilterByRegion";

const mockedHandleChangeFilter = jest.fn();

describe("FilterByRegion tests", () => {
  test("should render select element", () => {
    render(
      <FilterByRegion
        theme="light"
        handleChangeFilter={mockedHandleChangeFilter}
      />
    );
    const selectElement = screen.getByText(/filter by region/i);
    expect(selectElement).toBeInTheDocument();
  });
});
