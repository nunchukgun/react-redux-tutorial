import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Buttons from "./Buttons";
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "./BCSlice";

jest.mock("./BCSlice");

jest.mock("react-redux", () => {
  const mockReactRedux = {
    useSelector: jest.fn(),
    useDispatch: jest.fn(() => jest.fn()),
  };
  return mockReactRedux;
});

describe("Buttons", () => {
  const defaultState = {
    bc: { count: 0 },
  };

  beforeEach(() => {
    setCount.mockImplementation((payload) => ({
      type: "mock_setCount",
      payload,
    }));
    useSelector.mockImplementation((func) => func(defaultState));
    useDispatch.mockImplementation(() => jest.fn());
  });

  it("renders as expected", () => {
    render(<Buttons />);
  });

  it("works when buttons are pressed", () => {
    render(<Buttons />);
    
    fireEvent.click(screen.getByTestId("-5"));
    fireEvent.click(screen.getByTestId("-1"));
    fireEvent.click(screen.getByTestId("reset"));
    fireEvent.click(screen.getByTestId("+1"));
    fireEvent.click(screen.getByTestId("*2"));

    expect(setCount).toHaveBeenCalledTimes(5);
  });
});
