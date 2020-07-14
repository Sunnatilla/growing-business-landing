import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: 1280,
      boxSizing: "border-box",
      padding: "48px 95px 32px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  })
);

const BccTypography = (props: any) => {
  const classes = useStyles();
  return <div className={classes.container}>{props.children}</div>;
};

export default BccTypography;
