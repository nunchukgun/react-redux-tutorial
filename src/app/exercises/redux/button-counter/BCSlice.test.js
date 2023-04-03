import bcReducer, { initialState } from "./BCSlice";

describe("BCSlice", () => {
  describe("reducer", () => {
    it("returns the initial state if provided an unprocessable action", () => {
      const action = { type: "bad_type", payload: "blah blah" };
      const result = bcReducer(undefined, action);
      expect(result).toEqual(initialState);
    });

    it('updates the count when given an action with type "bc/setCount"', () => {
      const action = { type: "bc/setCount", payload: 100 };
      const expected = { ...initialState, count: 100 };
      const result = bcReducer(initialState, action);
      expect(result).toEqual(expected);
    });
  });
});
