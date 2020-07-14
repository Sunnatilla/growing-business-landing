import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

const BccCheckbox = withStyles({
  root: {
    color: "#4D565F",
    padding: 0,
    "&.Mui-disabled": {
      "&$checked": {
        color: "#80868C",
      },
    },
    "&.Mui-checked": {
      color: "#27AE60",
      "&:hover": {
        background: "none",
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: 24,
    },
    "&:hover": {
      background: "none",
      color: "#27AE60",
    },
  },
  checked: {},
})((props: any) => <Checkbox {...props} />);

export default BccCheckbox;
