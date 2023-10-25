import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

const Product = () => {
  const { productid } = useParams();

  console.log(productid, "productid");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "products", productid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>PRODUCT ID :{productid}</h1>
    </div>
  );
};

export default Product;
