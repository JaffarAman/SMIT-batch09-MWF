import React from "react";
import { CardCmp } from "../../components";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const Cart = () => {
  const { items } = useSelector((state) => state.cartSlice);
  console.log("cart item", items);
  return (
    <div>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {items.length &&
          items.map((product) => {
            return (
              <Grid key={product.product_id} item lg={3} md={6} sm={6} xs={12}>
                <CardCmp product={product} removeCart={true} />
              </Grid>
            );
          })}
      </Grid>
      {!items.length && (
        <h1 className="text-center mt-10 text-2xl">NO ITEM IN CART</h1>
      )}
    </div>
  );
};

export default Cart;
