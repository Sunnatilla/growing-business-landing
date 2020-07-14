import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontWeight: 300,
      display: "inline-block",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 18,
      color: "#141414",
      lineHeight: "24px",
    },
    p1: {
      fontSize: 18,
      lineHeight: "24px",
    },
    p2: {
      fontSize: 16,
      lineHeight: "20px",
    },
    p2l: {
      fontSize: 18,
      lineHeight: "24px",
    },
    p3: {
      fontSize: 14,
      lineHeight: "24px",
    },
    p4: {
      fontSize: 12,
      lineHeight: "16px",
    },
    title: {
      display: "inline-block",
      fontWeight: 500,
      color: "#141414",
      lineHeight: "52px",
    },
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 40,
      lineHeight: "40px",
    },
    h3: {
      fontSize: 28,
      lineHeight: "28px",
    },
    h4: {
      fontSize: 22,
      lineHeight: "24px",
    },
    h5: {
      fontSize: 20,
      lineHeight: "24px",
    },
    h6: {
      fontSize: 18,
      lineHeight: "20px",
    },
    block: {
      display: "block",
    },
    normal: {
      fontWeight: 300,
    },
    medium: {
      fontWeight: 400,
    },
    bold: {
      fontWeight: 500,
    },
  })
);

interface BccTypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  weight?: "normal" | "medium" | "bold";
  block?: boolean;
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p1"
    | "p2"
    | "p2l"
    | "p3"
    | "p4";
  className?: string;
}

const BccTypography = (props: BccTypographyProps) => {
  const classes = useStyles();
  const { type, weight, block, children } = props;
  return (
    <span
      className={`${
        type === "h1"
          ? classes.title + " " + classes.h1
          : type === "h2"
          ? classes.title + " " + classes.h2
          : type === "h3"
          ? classes.title + " " + classes.h3
          : type === "h4"
          ? classes.title + " " + classes.h4
          : type === "h5"
          ? classes.title + " " + classes.h5
          : type === "h6"
          ? classes.title + " " + classes.h6
          : type === "p1"
          ? classes.text + " " + classes.p1
          : type === "p2"
          ? classes.text + " " + classes.p2
          : type === "p2l"
          ? classes.text + " " + classes.p2l
          : type === "p3"
          ? classes.text + " " + classes.p3
          : type === "p4"
          ? classes.text + " " + classes.p4
          : ""
      } ${
        weight === "bold"
          ? classes.bold
          : weight === "medium"
          ? classes.medium
          : weight === "normal"
          ? classes.normal
          : ""
      } ${block ? classes.block : ""} ${
        props.className ? props.className : ""
      } `}
    >
      {children}
    </span>
  );
};

export default BccTypography;
