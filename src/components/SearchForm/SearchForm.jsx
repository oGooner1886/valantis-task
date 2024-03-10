import { Container } from "@mui/material";
import React, { useContext } from "react";
import SearchByName from "./SearchByName";
import Context from "../../Context/Context";
import FilterForm from "./FilterForm/FilterForm";

const SearchForm = () => {
  const value = useContext(Context);
  const { open, toggleDrawer } = value;
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      {!open ? (
        <>
          <SearchByName />
          <FilterForm open={open} toggleDrawer={toggleDrawer} />
        </>
      ) : (
        <FilterForm open={open} toggleDrawer={toggleDrawer} />
      )}
      {/* <SearchByName />
      <FilterForm open={open} toggleDrawer={toggleDrawer} /> */}
    </Container>
  );
};
export default SearchForm;
