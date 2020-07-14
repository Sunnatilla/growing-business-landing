import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PhoneAndroid, Call } from "@material-ui/icons";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: "40px 20px 40px",
        backgroundColor: "#fafafa",
        flexWrap: "wrap",
      },
      helpYou: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414",
      },
      paper: {
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        borderRadius: 8,
        padding: "6px 12px",
        width: "100%",
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
      },
      ourSpec: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B",
      },
      freeCall: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        color: "#141414",
        display: "flex",
        alignItems: "center",
        "& > svg": {
          padding: 10,
          backgroundColor: "#27AE60",
          borderRadius: 8,
          color: "white",
        },
      },
      phone: {
        fonStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      mainRoot: {
        backgroundColor: "#fafafa",
      },
      root: {
        padding: "40px 140px 80px",
        maxWidth: 1280,
        flexWrap: "nowrap",
        margin: "auto",
      },
      helpYou: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414",
      },
      paper: {
        backgroundColor: "white",
        borderRadius: 8,
        border: "1px solid #E8E8E8",
        padding: 20,
        width: 376,
        height: 104,
        marginLeft: 10,
        marginRight: 10,
        display: "flex",
        alignItems: "center",
      },
      ourSpec: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#5B5B5B",
      },
      freeCall: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414",
        display: "flex",
        alignItems: "center",
        "& > svg": {
          padding: 8,
          backgroundColor: "#27AE60",
          borderRadius: 8,
          color: "white",
        },
      },
      phone: {
        fonStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
      },
    },
  })
);

const CallUs = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const onClickCall505 = () => {
    // ReactGA.event({
    //   category: "BccCard_call_505",
    //   action: "call_505",
    // });
    window.open("tel:605");
  };

  const onClickCallMB = () => {
    // ReactGA.event({
    //   category: "BccCard_iron_call_2443030",
    //   action: "iron_call_2443030",
    // });
    window.open("tel:87272443044");
  };

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root} justify="center">
        <Grid item onClick={() => onClickCall505()} className={classes.paper}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Typography className={classes.freeCall}>
                <Call className={classes.freeCall} />
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.freeCall}>605</Typography>
              <Typography className={classes.ourSpec}>
                {t("callus.phone")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item onClick={() => onClickCallMB()} className={classes.paper}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Typography className={classes.freeCall}>
                <PhoneAndroid className={classes.freeCall} />
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.freeCall}>
                8(727)244-30-44
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CallUs;
