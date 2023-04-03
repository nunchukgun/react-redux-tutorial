import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ContentsList from "./ContentsList";

const Home = () => {
  return (
    <Card sx={{ margin: "5% 15%" }}>
      <CardHeader
        title={"React State Managment"}
        subheader={"Redux vs Props Drilling"}
      />
      <CardContent>
        <Typography variant={"h3"}>Table of Contents</Typography>
        <Divider />
        <br />
        <ContentsList />
      </CardContent>
    </Card>
  );
};

export default Home;
