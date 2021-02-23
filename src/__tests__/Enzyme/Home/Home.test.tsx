import React from "react";
import { shallow } from "enzyme";
import { Table, TableRow } from "@material-ui/core";
import Home, { IHomeProps } from "../../../App/Components/Home/Home";
import BasicTable from "../../../App/Components/Table";
import { columns, rows } from "../../../__Mocks__/server";

describe("Home page tests", () => {
  const mockLoadData = jest.fn();
  const props: IHomeProps = {
    loadData: mockLoadData,
    gridData: { rows: [], columns: [] },
    loading: false,
  };

  const wrapper = shallow(<Home {...props} />);
  test("It should render home page", () => {
    expect(wrapper.find(<Table />)).not.toBeNull();
  });

  it("should set state", () => {
    expect(wrapper.state("gridData")).toEqual({});
    expect(wrapper.state("loading")).toEqual(false);
  });

  it("should have header", () => {
    expect(wrapper.find("heading")).not.toBeNull();
    // expect(wrapper.find("heading")).toHaveTextContent("Home page");
  });

  it("should have a btn component", () => {
    //There should be only one button
    expect(wrapper.find("button")).toHaveLength(1);
    //Button should have matching text
    expect(wrapper.find("button").text()).toEqual("Load data");
  });

  it("should have empty grid data", () => {
    expect(wrapper.state("gridData")).toEqual({});
  });

  test("load data function", () => {
    wrapper.find("button").simulate("click");
    expect(mockLoadData.mock.calls.length).toEqual(1);
  });

  test("table grid", () => {
    const table = shallow(
      <BasicTable data={{ rows: rows, columns: columns }} />
    );
    expect(table).toHaveLength(1);
    expect(table.find(<TableRow />)).not.toBeNull();
    // const cell = table.find("td");
    // expect(row).toHaveLength(6);
    // expect(cell).toHaveLength(20);
  });
});
