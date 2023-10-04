import { useEffect, useState } from "react";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { Box } from "@mui/material";
import { db } from "../firebase";
import ProductCard from "../Components/ProductCard";
import TransitionsModal from "../Components/AppModal";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    let tempArr = [];
    const unsub = onSnapshot(collection(db, "products"), (doc) => {
      tempArr = [];
      doc.forEach((data) => {
        tempArr.push({ ...data.data(), id: data.id });
      });
      setAllProducts(tempArr);
    });
  }, []);

  console.log("allProducts", allProducts);
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
        <TransitionsModal />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "50px",
          flexWrap: "wrap",
          gap: "20px",
          px: "30px",
        }}
      >
        {allProducts.map((product, index) => {
          console.log("product", product);
          return <ProductCard productObj={product} key={product.id} />;
        })}
      </Box>
    </>
  );
};

export default HomePage;
