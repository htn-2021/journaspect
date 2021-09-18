import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttonStyle: {
    color: "rgb(248,248,255) !important",
    backgroundColor: "rgb(63, 61, 86) !important ",
    fontFamily: "Poppins !important",
    fontWeight: "700",
    // border: "1px solid rgb(63, 61, 86) !important",
  },
});

export default function SignInButton() {
  const classes = useStyles();
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="contained">Contained</Button> */}
      <Button variant="contained" className={classes.buttonStyle}>
        Sign In
      </Button>
    </Stack>
  );
}
