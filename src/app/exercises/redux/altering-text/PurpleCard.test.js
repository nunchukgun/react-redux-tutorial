import React from "react";
import { render, screen } from "@testing-library/react";
import PurpleCard from "./PurpleCard";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => {
  const mockReactRedux = {
    useSelector: jest.fn(),
  };
  return mockReactRedux;
});

describe("PurpleCard", () => {
  const defaultState = {
    at: { messageText: "boy howdy" },
  };

  beforeEach(() => {
    useSelector.mockImplementation((func) => func(defaultState));
  });

  it("renders as expected", () => {
    render(<PurpleCard />);
    const textElem = screen.getByText(defaultState.at.messageText);
    expect(textElem).not.toBeNull();
  });
});
