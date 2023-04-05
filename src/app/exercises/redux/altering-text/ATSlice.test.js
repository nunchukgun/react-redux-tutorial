import atReducer, { initialState } from "./ATSlice";

describe("ATSlice", () => {
  describe("reducer", () => {
    it("returns the initial state if provided an unprocessable action", () => {
      const action = { type: "bad_type", payload: "blah blah" };
      const result = atReducer(undefined, action);

      expect(result).toEqual(initialState);
    });

    it('updates the messageText when given an action with type "at/setMessageText"', () => {
      const action = { type: "at/setMessageText", payload: "new text" };
      const expected = { ...initialState, messageText: "new text" };
      const result = atReducer(initialState, action);

      expect(result).toEqual(expected);
    });
  });
});
