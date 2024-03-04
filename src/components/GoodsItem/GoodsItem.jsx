import { Grid } from "@mui/material";
import React from "react";

const GoodsItem = ({ item }) => {
  const { brand, id, price, product } = item;
  return (
    <Grid item xs="12" sm="6" md="4" sx={{ border: "1px solid grey" }}>
      <div className="card">
        <div className="card__img">
          <img src="ValantisHolder.png" alt="" />
        </div>
        <div className="card__body">
          <p className="card-id">{id}</p>
          <h5 className="card-title">{product}</h5>
          <p className="card-price">Цена: {price} руб.</p>
          <p className="card-brand">{brand || "NoName"}</p>
        </div>
      </div>
    </Grid>
  );
};

export default GoodsItem;
