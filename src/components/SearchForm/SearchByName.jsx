import { Input, TextField } from "@mui/material";
import React, { useContext } from "react";
import Context from "../../Context/Context";

const SearchByName = () => {
  const value = useContext(Context);
  const { search, handleChange } = value;
  return (
    <TextField
      label="Поиск по названию"
      variant="outlined"
      type="search"
      onChange={handleChange}
      value={search}
      sx={{ mb: "15px" }}
    />
  );
};

export default SearchByName;
