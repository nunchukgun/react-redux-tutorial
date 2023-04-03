import React from "react";
import { Button } from "@mui/material";

const Buttons = ({ count, setCount }) => (
  <>
    <Button
      size={"large"}
      variant={"contained"}
      onClick={() => setCount(count - 5)}
    >
      -5
    </Button>
    <Button
      size={"large"}
      variant={"contained"}
      onClick={() => setCount(count - 1)}
    >
      -1
    </Button>
    <Button size={"large"} variant={"contained"} onClick={() => setCount(0)}>
      RESET
    </Button>
    <Button
      size={"large"}
      variant={"contained"}
      onClick={() => setCount(count + 1)}
    >
      +1
    </Button>
    <Button
      size={"large"}
      variant={"contained"}
      onClick={() => setCount(count * 2)}
    >
      x2
    </Button>
  </>
);

export default Buttons;
