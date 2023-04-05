import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "./BCSlice";
import { Button } from "@mui/material";

const Buttons = () => {
  const dispatch = useDispatch();
  console.log(dispatch);
  const count = useSelector((state) => state.bc.count);

  const dispatchNewCount = (newCount) => dispatch(setCount(newCount));

  return (
    <>
      <Button
        size={"large"}
        variant={"contained"}
        onClick={() => dispatchNewCount(count - 5)}
        data-testid="-5"
      >
        -5
      </Button>
      <Button
        size={"large"}
        variant={"contained"}
        onClick={() => dispatchNewCount(count - 1)}
        data-testid="-1"
      >
        -1
      </Button>
      <Button
        size={"large"}
        variant={"contained"}
        onClick={() => dispatchNewCount(0)}
        data-testid="reset"
      >
        RESET
      </Button>
      <Button
        size={"large"}
        variant={"contained"}
        onClick={() => dispatchNewCount(count + 1)}
        data-testid="+1"
      >
        +1
      </Button>
      <Button
        size={"large"}
        variant={"contained"}
        onClick={() => dispatchNewCount(count * 2)}
        data-testid="*2"
      >
        x2
      </Button>
    </>
  );
};

export default Buttons;
