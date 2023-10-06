import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ProductCard(props) {
  const productObj = props.productObj;
  console.log(productObj, "productObj");

  const navigation = useNavigate();

  return (
    <Card sx={{ width: 300, border: "1px solid black" }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
          {productObj.productName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {productObj.productPrice}
        </Typography>
        <Typography
          variant="body2"
          //   sx={{
          //     display: "-webkit-box",
          //     maxWidth: "100%",
          //     "-webkit-line-clamp": 2,
          //     "-webkit-box-orient": "vertical",
          //     overflow: "hidden",
          //     textOverflow: "ellipsis",
          //   }}
          //   noWrap
        >
          {productObj.productDesc.slice(0, 50) + "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigation(`/product/${productObj.id}`);
          }}
        >
          View More
        </Button>
      </CardActions>
    </Card>
  );
}
