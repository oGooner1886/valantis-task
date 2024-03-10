import React, { useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import Context from "../../../../Context/Context";

const DrawerList = (toggleDrawer) => {
  const value = useContext(Context);
  const { brands, handleChange } = value;

  return (
    <Grid container width={"50vh"}>
      <Grid item>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Бренды
          </AccordionSummary>
          <AccordionDetails sx={{ minWidth: "47vh" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {brands.map((el) => {
                return (
                  <FormControlLabel
                    key={el}
                    control={<Radio />}
                    label={el}
                    value={el}
                    onChange={handleChange}
                  />
                );
              })}
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Цена
          </AccordionSummary>
          <AccordionDetails sx={{ minWidth: "47vh" }}>
            <FormGroup></FormGroup>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default DrawerList;
