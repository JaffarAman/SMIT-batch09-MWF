import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleProduct = () => {
  const param = useParams();
  console.log("param", param);
  const [productData, setProductData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://fakestoreapi.com/products/${param.productid}`
      );
      setProductData(data.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <h1>SingleProduct</h1>
      <h1>PARAM :{param.productid} </h1>

      <img src={productData?.image} width={250} height={250} />
      <h1>Title: {productData?.title}</h1>
      <h1>Price: {productData?.price}</h1>
    </>
  );
};

export default SingleProduct;
