import React from "react";
import { render, screen } from "@testing-library/react";
import BlueCard from "./BlueCard";

jest.mock("./OrangeCard");

describe("BlueCard", () => {
  it("renders as expected", () => {
    render(<BlueCard />);
    const mockOrangeCard = screen.getByTestId("mock-OrangeCard");
    expect(mockOrangeCard).not.toBeNull();
  });
});
