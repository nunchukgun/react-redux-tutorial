import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setMessageText } from "./ATSlice";

const OrangeCard = () => {
  const dispatch = useDispatch();
  const textToChange = useSelector((state) => state.at.messageText);
  const dispatchMessageText = (newText) => dispatch(setMessageText(newText));

  return (
    <Card style={{ padding: "5%", backgroundColor: "darkorange" }}>
      <TextField
        fullWidth
        value={textToChange}
        onChange={(event) => dispatchMessageText(event.target.value)}
      />
    </Card>
  );
};

export default OrangeCard;
