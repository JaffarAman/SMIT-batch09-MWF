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

export default function ProductCard({ productObj }) {
  const navigation = useNavigate();

  return (
    <Card sx={{ width: 300, border: "1px solid black" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {productObj.title}
        </Typography>
        <Typography variant="body2">
          {productObj.desc.slice(0, 50) + "..."}
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
