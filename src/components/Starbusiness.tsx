import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "50px 100px 90px",
      },
      card: {
        width: "50%",
        borderRadius: 8,
        padding: "20px 60% 30px 20px",
        background: `url(${process.env.PUBLIC_URL +
          "/sb.svg"}) no-repeat white`,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);",
        backgroundSize: "contain",
        backgroundPositionX: "right",
      },
      btn: {
        border: "1px solid #4D565F",
        boxSizing: "border-box",
        borderRadius: 30,
        padding: "8px 12px",
        marginBottom: 20,
        height: "auto",
        "& > span": {
          lineHeight: 0,
        },
      },
      title: {
        marginBottom: 10,
      },
      subTitle: {
        marginBottom: 30,
      },
      as: {
        marginRight: 20,
      },
    },
  })
);

const Starbusiness = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.card}>
          <BccButton
            variant="outlined"
            color="secondary"
            className={classes.btn}
          >
            <BccTypography block type="p4">
              Мобильный банкинг
            </BccTypography>
          </BccButton>
          <BccTypography block type="h3" className={classes.title}>
            StarBusiness
          </BccTypography>
          <BccTypography block type="p2" className={classes.subTitle}>
            Управляйте бизнесом онлайн через мобильное приложение “StarBusiness”
          </BccTypography>
          <img
            className={classes.as}
            src={process.env.PUBLIC_URL + "/as.svg"}
          />
          <img src={process.env.PUBLIC_URL + "/gp.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Starbusiness;
