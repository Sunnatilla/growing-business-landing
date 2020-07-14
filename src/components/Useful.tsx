import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccButton,
  BccTabs,
  BccTab,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#fff",
      },
      innerContainer: {
        maxWidth: "100%",
        margin: "0 auto",
        width: "100%",
        padding: "40px 20px",
        boxSizing: "border-box",
      },
      title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414",
        marginBottom: 40,
      },
      tabs: {
        marginTop: 40,
        fontSize: 16,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "contain",
        "& > span": {
          color: "#27AE60",
        },
        "& > div": {
          flexWrap: "wrap",
          "& > div:first-child": {
            order: 2,
            marginBottom: 0,
          },
          "& > div": {
            width: "100%",
            order: 1,
            marginBottom: 12,
            "& > img": {
              width: "100%",
              maxHeight: 250,
            },
          },
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "& > button": {
            maxWidth: "100%",
            "& > span": {
              whiteSpace: "nowrap",
            },
          },
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#fff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "40px 140px 60px",
        boxSizing: "border-box",
      },
      title: {
        marginBottom: 40,
        textAlign: "left",
      },
      tabs: {
        marginTop: 40,
        fontSize: 16,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "contain",
        "& > span": {
          color: "#27AE60",
        },
        "& > div > div": {
          width: "50%",
          paddingBottom: 24,
          borderBottom: "1px solid #F3F3F3",
          marginBottom: 25,
        },
        "& > div > div:nth-child(2n+1)": {
          color: "#80868C",
          paddingRight: 15,
          paddingLeft: 0,
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "& > button": {
            maxWidth: "none",
            "& > span": {
              whiteSpace: "nowrap",
            },
          },
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      link: {
        textDecoration: "none",
      },
    },
  })
);

const Useful = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          Часто задаваемые вопросы
        </BccTypography>

        <BccTabs
          value={index}
          onChange={(e: any, i: number) => setIndex(i)}
          className={classes.tab}
        >
          <BccTab label="Часто задаваемые вопросы" />;
        </BccTabs>
        <div className={classes.tabs}>
          <Grid container justify="space-between">
            <Grid item>
              Кредитный лимит можно открыть сразу при открытии счета?
            </Grid>
            <Grid item>
              Да, Вы можете открыть кредитный лимит на счёт сразу после открытия
              счета
            </Grid>
            <Grid item>
              Кредитный лимит на счёт открывается действующим клиентам?
            </Grid>
            <Grid item>
              Да, открыть кредитный лимит на счёт можно и новым, и действующим
              клиентам
            </Grid>
            <Grid item>В чём отличается тариф WELCOME от STANDARD?</Grid>
            <Grid item>
              Каждому клиенту открывается WELCOME лимит без финансового анализа
              в размере 5 000 тенге. STANDARD лимит насчитывается индивидуально
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Useful;
