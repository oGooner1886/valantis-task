import { Container, FormControl, TextField } from "@mui/material";
import React from "react";
import SearchByBrand from "./SearchByBrand";
import SearchByName from "./SearchByName";

const SearchForm = () => {
  return (
    <Container sx={{ display: "grid", justifyItems: "center" }}>
      <SearchByName />
      {/* <SearchByBrand/> */}
    </Container>
  );
};

export default SearchForm;
