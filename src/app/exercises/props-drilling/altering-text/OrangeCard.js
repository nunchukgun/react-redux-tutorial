import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

const OrangeCard = ({ textToChange, onChangeHandler }) => {
  return (
    <Card style={{ padding: "5%", backgroundColor: "darkorange" }}>
      <TextField
        fullWidth
        value={textToChange}
        onChange={(event) => onChangeHandler(event.target.value)}
      />
    </Card>
  );
};

export default OrangeCard;
