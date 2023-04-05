import React from "react";
import { render } from "@testing-library/react";
import ButtonCounter from "./ButtonCounter";
import { useSelector } from "react-redux";

jest.mock("./Buttons");
jest.mock("react-redux", () => {
  const mockReactRedux = {
    useSelector: jest.fn(),
  };
  return mockReactRedux;
});

describe("ButtonCounter", () => {
  const defaultState = {
    bc: { count: 0 },
  };

  beforeEach(() => {
    useSelector.mockImplementation((func) => func(defaultState));
  });

  it("renders as expected", () => {
    render(<ButtonCounter />);
  });
});
