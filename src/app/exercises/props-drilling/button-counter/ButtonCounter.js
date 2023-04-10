import React, { useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import Buttons from "./Buttons";

const cardTitle = <Typography variant={"h3"}>Button Counter</Typography>;

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <Card
      style={{
        margin: "5%",
      }}
    >
      <CardHeader title={cardTitle} />
      <CardContent>
        <Typography variant={"h5"}>Current Count: {count}</Typography>
      </CardContent>
      <CardActions>
        <Buttons count={count} setCount={setCount} />
      </CardActions>
    </Card>
  );
};

export default ButtonCounter;
