import React from "react";
import { render, screen } from "@testing-library/react";
import AlteringText from "./AlteringText";

jest.mock("./PurpleCard");
jest.mock("./GreenCard");

describe("AlteringText", () => {
  // Not always a good idea to test EVERY dom element like this but here's how you would do it
  it("renders as expected", () => {
    render(<AlteringText />);

    const title = screen.getByText("Displayed Message Text:");
    const mockPurpleCard = screen.getByTestId("mock-PurpleCard");
    const mockGreenCard = screen.getByTestId("mock-GreenCard");

    expect(title).not.toBeNull();
    expect(mockPurpleCard).not.toBeNull();
    expect(mockGreenCard).not.toBeNull();
  });
});
