import ToggleButton from "@material-ui/lab/ToggleButton";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const BccToggleButton = withStyles({
  root: {
    borderColor: "#27AE60",
    transition: "all .2s ease-out",
    "&:hover": {
      backgroundColor: "#27AE60",
      "& span": {
        color: "#27AE60",
      },
    },
    "&.Mui-selected": {
      backgroundColor: "#27AE60",
      "&:hover": {
        backgroundColor: "#7DCEA0",
        "& span": {
          color: "white",
        },
      },
      "& span": {
        color: "white",
      },
    },
    "& span": {
      color: "#80868C",
      transition: "all .2s ease-out",
    },
  },
})((props: any) => (
  <ToggleButton disableFocusRipple disableRipple {...props} />
));

export default BccToggleButton;
