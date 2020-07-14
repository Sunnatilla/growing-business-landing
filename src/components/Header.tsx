import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    [theme.breakpoints.down("sm")]: {

    },
    
    [theme.breakpoints.between("sm", "xl")]: {
    container: {
      padding: "45px 52px 10px",
      maxWidth: 1280,
      margin: "0 auto",
    },
    logo: {
      marginBottom: 30,
    },
    back: {
      color: "#898989",
      fontSize: 16,
      lineHeight: "20px",
      textDecoration: "none",
      "& > span": {
        marginLeft: 10,
        display: "inline-block",
        verticalAlign: "top",
        marginTop: 2,
      },
    },
    backBtn: {}
  },

  })
);

const Header = (props: any) => {
  const classes = useStyles({});

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      className={classes.container}
    >
      <Grid item>
        <a href="https://www.bcc.kz/">
          <img className={classes.logo} src="logo.svg" alt="BCC logo" />
        </a>
      </Grid>
      <Grid item>
        <a href="https://www.bcc.kz/" className={classes.back}>
          <img src="back.svg" alt="" />
          <span>Назад на главную</span>
        </a>
      </Grid>
    </Grid>
  );
};

export default Header;
