import React from "react";
import { render, screen } from "@testing-library/react";
import GreenCard from "./GreenCard";

jest.mock("./BlueCard");

describe("GreenCard", () => {
  it("renders as expected", () => {
    render(<GreenCard />);
    const mockBlueCard = screen.getByTestId("mock-BlueCard");
    expect(mockBlueCard).not.toBeNull();
  });
});
