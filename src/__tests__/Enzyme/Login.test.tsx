import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ILoginProps, validateLogin } from "../../App/Components/Login/Login";
import Login from "../../App/Components/Login/Login";

Enzyme.configure({ adapter: new Adapter() });

describe("Login page tests", () => {
  const props: ILoginProps = {
    login: jest.fn(),
    error: "",
    loading: false,
  };
  const wrapper = shallow(<Login {...props} />);

  it("should have a btn component", () => {
    //There should be only one button
    expect(wrapper.find("button")).toHaveLength(1);

    //Button should have matching text
    expect(wrapper.find("button").text()).toEqual("LOGIN");
  });

  it("should have an empty email and password state var", () => {
    //Optionally test to check if password and email are empty strings on
    expect(wrapper.state("username")).toEqual("");
    expect(wrapper.state("password")).toEqual("");
  });

  it("should test email and password presence", async () => {
    //should return true
    expect(await validateLogin("email@email.com", "password")).toEqual(true);

    //should return false
    expect(await validateLogin("", "")).toEqual(false);
  });
});
