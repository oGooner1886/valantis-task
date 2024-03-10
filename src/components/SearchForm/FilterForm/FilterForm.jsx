import React from "react";
import { Button, Drawer } from "@mui/material";
import DrawerList from "./DrawerList/DrawerList";
const FilterForm = ({ open, toggleDrawer }) => {
  return (
    <div>
      <Button onClick={() => toggleDrawer(true)}>Открыть фильтр</Button>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer}/>
      </Drawer>
    </div>
  );
};

export default FilterForm;
