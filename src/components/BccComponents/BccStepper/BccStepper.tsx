import Stepper from "@material-ui/core/Stepper";
import { withStyles } from "@material-ui/core/styles";
import BccStepConnector from "./BccStepConnector/BccStepConnector";
import React from "react";

const BccStepper = withStyles({
  root: {},
})((props: any) => (
  <Stepper alternativeLabel connector={<BccStepConnector />} {...props} />
));

export default BccStepper;
