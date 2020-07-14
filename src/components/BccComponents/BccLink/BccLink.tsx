import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      fontSize: "inherit",
      color: "#249052",
    },
  })
);

interface BccTypographyProps extends React.HTMLAttributes<HTMLLinkElement> {
  children: any;
  href: string;
  target: string;
}

const BccLink = (props: BccTypographyProps) => {
  const classes = useStyles();
  const { href, target, children } = props;
  return (
    <a
      className={`${classes.link} ${props.className ? props.className : ""}`}
      href={href}
      target={target ? target : ""}
    >
      {children}
    </a>
  );
};

export default BccLink;
