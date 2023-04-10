import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OrangeCard from "./OrangeCard";
import { useSelector, useDispatch } from "react-redux";
import { setMessageText } from "./ATSlice";

jest.mock("./ATSlice");

jest.mock("react-redux", () => {
  const mockReactRedux = {
    useSelector: jest.fn(),
    useDispatch: jest.fn(() => jest.fn()),
  };
  return mockReactRedux;
});

describe("OrangeCard", () => {
  const defaultState = {
    at: { messageText: "boy howdy" },
  };

  beforeEach(() => {
    setMessageText.mockImplementation((payload) => ({
      type: "mock_setCount",
      payload,
    }));
    useSelector.mockImplementation((func) => func(defaultState));
    useDispatch.mockImplementation(() => jest.fn());
  });

  it("renders as expected", () => {
    render(<OrangeCard />);
    const textElem = screen.getByTestId("orange_card_input");
    expect(textElem).not.toBeNull();
  });

  it("updates text onChange", () => {
    render(<OrangeCard />);
    const textElem = screen.getByTestId("orange_card_input");
    fireEvent.change(textElem, { target: { value: "newText" } });

    expect(setMessageText).toHaveBeenCalledTimes(1);
    expect(setMessageText).toHaveBeenCalledWith("newText");
  });
});
