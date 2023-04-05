import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const PurpleCard = () => {
  const messageText = useSelector(state => state.at.messageText)
  return (
    <Card style={{ padding: "5%", backgroundColor: "orchid" }}>
      <Typography variant={"h3"}>{messageText}</Typography>
    </Card>
  );
};

export default PurpleCard;
