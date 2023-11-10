import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../store/slices/cartSlice";

export default function CardCmp({ product, removeCart }) {
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addToCart(product));
  };
  const removeitem = () => {
    dispatch(removeToCart(product));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={"https://picsum.photos/200/300"}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name || "Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.description || "Desc"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">RS:{product?.price || "PRICE"}</Button>
        {removeCart ? (
          <Button variant="contained" onClick={removeitem}>
            Remove TO CART
          </Button>
        ) : (
          <Button variant="contained" onClick={addCart}>
            ADD TO CART
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
