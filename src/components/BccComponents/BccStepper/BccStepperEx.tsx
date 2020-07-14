import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import BccStepLabel from "./BccStepLabel/BccStepLabel";
import BccStepper from "./BccStepper";
import BccStep from "./BccStep/BccStep";
import BccButton from "../BccButton/BccButton";
import BccTypography from "../BccTypography/BccTypography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Личные данные", "Контакты", "Печать"];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return "Заполните личные данные";
    case 1:
      return "Заполните контакты";
    case 2:
      return "Распечатать";
    default:
      return "Ошибка";
  }
}

const BccStepperEx = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <BccStepper activeStep={activeStep}>
        {steps.map((label) => (
          <BccStep key={label}>
            <BccStepLabel>{label}</BccStepLabel>
          </BccStep>
        ))}
      </BccStepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <BccTypography type="p3" className={classes.instructions}>
              Все завершено!
            </BccTypography>
            <BccButton onClick={handleReset}>К началу</BccButton>
          </div>
        ) : (
          <div>
            <BccTypography type="p3" className={classes.instructions}>
              {getStepContent(activeStep)}
            </BccTypography>
            <div>
              <BccButton
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Назад
              </BccButton>
              <BccButton
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Завершить" : "Далее"}
              </BccButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BccStepperEx;
