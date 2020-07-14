import React from "react";
import { Grid, InputAdornment } from "@material-ui/core";
import {
  BccTypography,
  BccToggleButton,
  BccToggleButtonGroup,
  BccSlider,
  BccInput,
  BccLink,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "100%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            width: "70%",
            margin: "0 auto",
          },
          "&  > video": {
            width: "70%",
            margin: "0 auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        "& > div": {
          width: "100%",
        },
      },
      qr: {
        "& > img": {
          width: "50%",
        },
      },
      mobileLinks: {
        marginRight: 6,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            display: "block",
            width: 120,
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          width: "50%",
          borderRadius: "100px!important",
          border: "none",
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 100px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "80%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            height: 350,
          },
          "&  > video": {
            height: 350,
            width: "auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        "& > div": {
          width: "calc(50% - 18px)",
        },
      },
      qr: {
        "& > img": {
          height: "100%",
        },
      },
      mobileLinks: {
        marginRight: 36,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            width: 120,
            display: "block",
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          width: "50%",
          borderRadius: "100px!important",
          border: "none",
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      backButton: {
        minWidth: 250,
        textTransform: "capitalize!important",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
      item: {
        display: "flex",
        width: "calc(50% - 20px)",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        marginBottom: 50,
        "& > img": {
          marginBottom: 42,
          marginRight: 24,
          height: 60,
        },
      },
    },
    link: {
      color: "#249052",
      textDecoration: "underline",
      cursor: "pointer",
    },
    calc: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      alignItems: "center",
      "& > div:first-child": {
        width: "calc(60% - 15px)",
      },
      "& > div:last-child": {
        width: "calc(40% - 15px)",
        background: "#FAFAFA",
        borderRadius: 8,
        padding: 24,
      },
    },
    paymentWrap: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      marginBottom: 60,
    },
    paymentWrapSec: {
      marginBottom: 0,
    },
    sliderWrap: {
      position: "relative",
      width: "100%",
      "& > div > div": {
        width: "100%",
      },
    },
    sliderRange: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -20,
      color: "#b3b6ba",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
    },
    tabsContent: {
      marginTop: 56,
    },
    input: {
      display: "block",
      width: "100%",
    },
    right: {
      float: "right",
    },
    sumTitle: {
      marginBottom: 16,
    },
    sumText: {
      marginBottom: 24,
    },
    docs: {
      marginTop: 24,
      "& > div": {
        width: "calc(50% - 20px)",
        marginBottom: 40,
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        "& > img": {
          marginRight: 24,
        },
      },
    },
    table: {
      "& > tr > td > tr": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },
      "& > tr > td > tr td": {
        borderBottom: 0,
        padding: "16px 16px 0 0",
        "& tr:last-child > td": { padding: "0 16px 0 0" },
        "& td": {
          padding: "0 16px 16px 0",
        },
      },
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [loan, setLoan] = React.useState(15000000);
  const [month, setMonth] = React.useState(24);
  const [toggle, setToggle] = React.useState("overview");
  const [docToggle, setDocToggle] = React.useState("ip");
  const { t } = useTranslation();

  return (
    <div className={classes.container} ref={props.refProp}>
      <BccToggleButtonGroup
        value={toggle}
        exclusive
        onChange={(e: any, next: any) => {
          next && setToggle(next);
        }}
        className={classes.toggleGroup}
      >
        <BccToggleButton value="overview">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            Обзор
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="redemption">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            Погашение
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="documents">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            Документы
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="rates">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            Тарифы
          </BccTypography>
        </BccToggleButton>
      </BccToggleButtonGroup>
      <div className={classes.tabsContent}>
        {toggle === "overview" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/tengee.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                Валюта – тенге.
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/period.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                Срок кредитования - 12, 24 и 36 месяцев
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/tengeu.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                Максимальная сумма займа для юридических лиц и индивидуальных
                предпринимателей (субъекты микро, малого и среднего бизнеса) -
                до 40 000 000 ₸
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/contractt.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                Обеспечение:
                <br /> - Жилая недвижимость до 150 кв.м. в областных центрах РК
                <br /> - Коммерческая недвижимость до 200 кв.м. в областных
                центрах РК
                <br /> - Приобретаемые основные фонды, с отсрочкой о
                предоставлении в залог (по решению уполномоченного органа Банка)
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "redemption" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/roundperd.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                Ежемесячно равными частями
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/periodt.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                Очередной платеж для погашения автоматически списывается с
                текущего счета в указанную в графике дату.
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/givet.svg"} />
              <BccTypography
                type="p2"
                weight="bold"
                block
                className={classes.itemTitle}
              >
                Возможно досрочное погашение без штрафных санкций, с 7-го месяца
                кредитования
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "calculator" ? (
          <Grid
            container
            wrap="nowrap"
            className={classes.calc}
            justify="space-between"
          >
            <Grid item>
              <div className={classes.paymentWrap}>
                <div className={classes.sliderWrap}>
                  <BccInput
                    label="Сумма займа"
                    key="loan"
                    value={loan + " ₸"}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e: any) =>
                      e.target.value > 30000000
                        ? setLoan(30000000)
                        : setLoan(e.target.value)
                    }
                    className={classes.input}
                  />
                  <BccSlider
                    style={{
                      left: 6,
                      right: 6,
                      width: "calc(100% - 12px)",
                      bottom: -1,
                      padding: 0,
                      position: "absolute",
                    }}
                    min={0}
                    max={30000000}
                    step={1000000}
                    value={loan}
                    valueLabelDisplay="off"
                    defaultValue={loan}
                    onChange={(e: any, val: any) =>
                      setLoan(val instanceof Array ? val[1] : val)
                    }
                  />
                  <div className={classes.sliderRange}>
                    <span>0</span>
                    <span>30 000 000</span>
                  </div>
                </div>
              </div>
              <div
                className={`${classes.paymentWrap} ${classes.paymentWrapSec}`}
              >
                <div className={classes.sliderWrap}>
                  <BccInput
                    label="Выберите срок"
                    key="month"
                    value={month + " мес."}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e: any) =>
                      e.target.value > 120
                        ? setMonth(120)
                        : setMonth(e.target.value)
                    }
                    className={classes.input}
                  />
                  <BccSlider
                    style={{
                      left: 6,
                      right: 6,
                      width: "calc(100% - 12px)",
                      bottom: -1,
                      padding: 0,
                      position: "absolute",
                    }}
                    min={0}
                    max={120}
                    step={1}
                    value={month}
                    valueLabelDisplay="off"
                    defaultValue={loan}
                    onChange={(e: any, val: any) =>
                      setMonth(val instanceof Array ? val[1] : val)
                    }
                  />
                  <div className={classes.sliderRange}>
                    <span>0</span>
                    <span>120</span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item>
              <BccTypography type="h3" block className={classes.sumTitle}>
                Расчёт
              </BccTypography>
              <BccTypography type="p3" block className={classes.sumText}>
                Процентная ставка:
                <BccTypography className={classes.right} type="h5">
                  23%
                </BccTypography>
              </BccTypography>
              <BccTypography type="p3" block className={classes.sumText}>
                Комиссия за управление лимитом:
                <BccTypography className={classes.right} type="h5">
                  0.5%
                </BccTypography>
              </BccTypography>
              <BccTypography type="p3" block className={classes.sumText}>
                Итоговая сумма по кредиту:
                <BccTypography className={classes.right} type="h5">
                  1 650 000 ₸
                </BccTypography>
              </BccTypography>
              <BccTypography type="p4" block>
                *Данные предварительные
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "documents" ? (
          <>
            <BccToggleButtonGroup
              value={docToggle}
              exclusive
              onChange={(e: any, next: any) => {
                next && setDocToggle(next);
              }}
              className={classes.toggleGroup}
            >
              <BccToggleButton value="ip">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  Для индивидуальных предпринимателей
                </BccTypography>
              </BccToggleButton>
              <BccToggleButton value="ul">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  Для юридических лиц
                </BccTypography>
              </BccToggleButton>
            </BccToggleButtonGroup>
            {docToggle === "ip" ? (
              <Grid container justify="space-between" className={classes.docs}>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="">
                    Перечень документов
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="">
                    Анкета-заявление
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="">
                    Заявление о присоединении к оферте
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="">
                    Оферта
                  </BccLink>
                </Grid>
              </Grid>
            ) : (
              <Grid container justify="space-between" className={classes.docs}>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="">
                    Перечень документов
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="">
                    Анкета-заявление
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="">
                    Заявление о присоединении к оферте
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="">
                    Оферта
                  </BccLink>
                </Grid>
              </Grid>
            )}
          </>
        ) : toggle === "rates" ? (
          <BccTableContainer>
            <BccTable aria-label="simple table">
              <BccTableHead>
                <BccTableRow>
                  <BccTableCell>Название тарифа</BccTableCell>
                  <BccTableCell>Срок</BccTableCell>
                  <BccTableCell>Ценовые параметры</BccTableCell>
                </BccTableRow>
              </BccTableHead>
              <BccTableBody className={classes.table}>
                <BccTableRow>
                  <BccTableCell>
                    Ставка вознаграждения номинальная:
                  </BccTableCell>
                  <BccTableCell>
                    <BccTableRow>
                      <BccTableCell>12 месяцев</BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>24 месяцев</BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>36 месяцев</BccTableCell>
                    </BccTableRow>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTableRow>
                          <BccTableCell>18%</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>18,5%</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>19%</BccTableCell>
                        </BccTableRow>
                      </BccTableCell>
                      <BccTableCell>годовых</BccTableCell>
                    </BccTableRow>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>
                    Ставка вознаграждения фактическая:
                  </BccTableCell>
                  <BccTableCell>
                    <BccTableRow>
                      <BccTableCell>12 месяцев</BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>24 месяцев</BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>36 месяцев</BccTableCell>
                    </BccTableRow>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTableRow>
                          <BccTableCell>ГЭСВ+Комис/12</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>ГЭСВ+Комис/12</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>ГЭСВ+Комис/12</BccTableCell>
                        </BccTableRow>
                      </BccTableCell>
                      <BccTableCell>в месяц</BccTableCell>
                    </BccTableRow>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>ГЭСВ</BccTableCell>
                  <BccTableCell>
                    <BccTableRow>
                      <BccTableCell>12 месяцев</BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>24 месяцев</BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>36 месяцев</BccTableCell>
                    </BccTableRow>
                  </BccTableCell>
                  <BccTableCell>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTableRow>
                          <BccTableCell>Х%</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>Х%</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>Х%</BccTableCell>
                        </BccTableRow>
                      </BccTableCell>
                      <BccTableCell>годовых</BccTableCell>
                    </BccTableRow>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>Пеня за просрочку</BccTableCell>
                  <BccTableCell></BccTableCell>
                  <BccTableCell>
                    <BccTableRow>
                      <BccTableCell>0,2%</BccTableCell>
                      <BccTableCell>в день от суммы просрочки</BccTableCell>
                    </BccTableRow>
                  </BccTableCell>
                </BccTableRow>
                <BccTableRow>
                  <BccTableCell>Комиссия за организацию займа</BccTableCell>
                  <BccTableCell></BccTableCell>
                  <BccTableCell>
                    <BccTableRow>
                      <BccTableCell>0,5%</BccTableCell>
                      <BccTableCell>от суммы кредита</BccTableCell>
                    </BccTableRow>
                  </BccTableCell>
                </BccTableRow>
              </BccTableBody>
            </BccTable>
          </BccTableContainer>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tabs;
