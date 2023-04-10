import React from "react";
import { useSelector } from "react-redux";
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
  const count = useSelector((state) => {
    return state.bc.count;
  });

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
        <Buttons />
      </CardActions>
    </Card>
  );
};

export default ButtonCounter;
