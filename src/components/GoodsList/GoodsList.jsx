import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Context from "../../Context/Context";
import GoodsItem from "../GoodsItem/GoodsItem";

const GoodsList = () => {
  const value = useContext(Context);
  const { items } = value;
  return (
    <Grid container spacing={2}>
      {Object.entries(items).map(([key, item]) => {
        return <GoodsItem key={key} item={item} />;
      })}
    </Grid>
  );
};

export default GoodsList;
