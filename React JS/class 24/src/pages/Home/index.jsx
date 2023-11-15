import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardCmp } from "../../components";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const products = await axios.get(
        "https://fake-store-api.mock.beeceptor.com/api/products"
      );
      setProducts(products.data);
    })();
  }, []);
  return (
    <Box className="px-5 my-5">
      <Grid container columnSpacing={2} rowSpacing={2}>
        {products.length &&
          products.map((product) => {
            return (
              <Grid key={product.product_id} item lg={3} md={6} sm={6} xs={12}>
                <CardCmp product={product} />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

{
  /* container ==> row */
}
{
  /* item ==> column */
}
export default Home;
