import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Context from "../../Context/Context";
import GoodsItem from "../GoodsItem/GoodsItem";

const GoodsList = () => {
  const value = useContext(Context);
  const { items, filtered, paginItems } = value;
  // const paginItems = filteredItems.slice(0, 50);

  
  return (
    <Grid container spacing={2}>
      {filtered &&
        paginItems.map((item) => {
          return <GoodsItem key={item.id} item={item} />;
        })}
      {!filtered &&
        items.map((item) => {
          return <GoodsItem key={item.id} item={item} />;
        })}
    </Grid>
  );
};

export default GoodsList;
