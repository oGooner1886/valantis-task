import { Button } from "@mui/material";
import React from "react";

const ButtonOnUp = () => {
  const onUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => onUp()}
      sx={{ borderRadius: "50%", width: "50px", height: "50px", mt: "20px" }}
    >
      UP
    </Button>
  );
};

export default ButtonOnUp;
