import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#F3F3F3",
      },
      innerContainer: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px 40px",
      },
      title: {
        marginBottom: 40,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },
      item: {
        background: "#FFFFFF",
        width: "100%",
        marginBottom: 30,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px",
        "& > img": {
          height: 60,
          display: "block",
          marginBottom: 10,
        },
      },
      itemTitle: {
        marginBottom: 10,
        fontFamily: "Roboto",
        fontStyle: "bold",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#FAFAFA",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 100px 80px",
      },
      title: {
        marginBottom: 40,
      },
      item: {
        background: "#FFFFFF",
        width: "calc(33% - 20px)",
        marginBottom: 30,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px",
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        "& > img": {
          height: 60,
          display: "inline-block",
          marginRight: 24,
        },
      },
      itemTitle: {
        marginBottom: 10,
      },
    },
  })
);

const items = [
  "/icons/idea.svg",
  "/icons/contract.svg",
  "/icons/time.svg",
  "/icons/tengeu.svg",
  "/icons/period.svg",
  "/icons/doc.svg",
];

const Banner = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          {t("benefits.title")}
        </BccTypography>
        <Grid container justify="space-between" direction="row">
          {items.map((i: string, index: number) => (
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + i} />
              <BccTypography type="h6" block className={classes.itemTitle}>
                {t(`benefits.${index + 1}`)}
              </BccTypography>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
