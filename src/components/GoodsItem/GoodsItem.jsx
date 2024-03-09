import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const GoodsItem = ({ item }) => {
  const { brand, id, price, product } = item;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          image="ValantisHolder.png"
          alt={product}
          height="140"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "12px" }}
          >
            {`Код товара: ${id}`}
          </Typography>
          <Typography variant="div" component="h3">
            {product}
          </Typography>
          <Typography variant="div" component="p">
            {brand || "Made by Valantis"}
          </Typography>
          <Typography variant="body1" component="p">
            Цена: {price}₽
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
