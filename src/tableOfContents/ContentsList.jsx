import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import routes from "./routes";

const RouterButton = (props) => {
  const { path, text } = props;
  return (
    <Button
      component={Link}
      to={path}
      variant={"outlined"}
      color={"primary"}
      style={{ width: "100%" }}
    >
      {text}
    </Button>
  );
};

const ContentsList = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <RouterButton
          path={routes.drilling.bc}
          text={"Counting With State (props)"}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={routes.redux.bc}
          text={"Counting With State (redux)"}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={routes.drilling.cards}
          text={"Altering Text (props)"}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={routes.redux.cards}
          text={"Altering Text (redux)"}
        />
      </Grid>
    </Grid>
  );
};

export default ContentsList;
