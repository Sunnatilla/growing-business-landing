import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { BccTypography, BccLink, BccButton } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        background: `url(${process.env.PUBLIC_URL + "/banner.png"}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      },
      containerOut: {
        background: "linear-gradient(to top, #ffffff, #f9f6f3)",
      },
      innerContainer: {
        margin: "0 auto",
        width: "100%",
        padding: "60px 20px 40px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 15,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },
      subTitle: {
        marginBottom: 30,
        opacity: 0.7,
        fontWeight: "normal",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: "19px",
        color: "#5B5B5B",
      },
      blockText: {
        marginBottom: 5,
        fontWeight: "bold",
        fontFamily: "Roboto",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },

      firstBlock: {
        marginBottom: 15,
      },

      openBtn: {
        minWidth: 300,
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Roboto",
        lineHeight: "21px",
        color: "#ffffff",
        width: "100%",
        marginTop: 95,
      },
      select: {
        position: "absolute",
        right: 20,
        top: 50,
        color: "#141414",
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        background: `url(${process.env.PUBLIC_URL + "/banner.png"}) no-repeat`,
        backgroundSize: "contain",
        backgroundPosition: "right top",
      },
      containerOut: {
        background: "linear-gradient(to top, #f6f6f5, #f4f4f2)",
      },
      innerContainer: {
        maxWidth: 1280,
        position: "relative",
        margin: "0 auto",
        width: "100%",
        padding: "100px 100px 150px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 152,
      },
      subTitle: {
        marginBottom: 30,
        opacity: 0.7,
      },
      block: {
        marginBottom: 30,
      },
      firstBlock: {
        marginRight: 70,
      },
      blockText: {
        marginBottom: 5,
      },
      openBtn: { minWidth: 300, fontSize: 18, fontWeight: "bold" },
      select: {
        position: "absolute",
        right: 0,
        top: 10,
        color: "#141414",
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
    },
    link: {
      color: "#249052",
      textDecoration: "underline",
      cursor: "pointer",
    },
  })
);

const Banner = (props: any) => {
  const classes = useStyles({});
  // const { t } = useTranslation();

  // const handleLangChange = (lang: any) => {
  //   props.changeLang(lang);
  // };

  // const onClickAppStore = (e: any) => {
  //   e.preventDefault();
  //   ReactGA.event({
  //     category: "1button_starbusiness_calltoaction",
  //     action: "starbusiness_calltoaction",
  //   });
  //   window.open("http://onelink.to/q9jhwj", "_blank");
  // };

  const goToOnline = (e: any) => {
    e.preventDefault();
    // ReactGA.event({
    //   category: "1button_open_account_online_calltoaction",
    //   action: "Open_account_online_calltoaction",
    // });
    props.scrollToOrder();
  };

  // const onClickIB = (e: any) => {
  //   e.preventDefault();
  //   ReactGA.event({
  //     category: "1button_internetbanking_calltoaction",
  //     action: "interbanking_calltoaction",
  //   });
  //   window.open(
  //     "https://www.bcc.kz/product/system-internet-banking_yur/",
  //     "_blank"
  //   );
  // };

  return (
    <div className={classes.containerOut}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <BccTypography type="h1" block className={classes.title}>
            Растущий бизнес
          </BccTypography>
          <BccButton
            className={classes.openBtn}
            variant="contained"
            color="primary"
            onClick={(e: any) => goToOnline(e)}
          >
            Подать заявку
          </BccButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
