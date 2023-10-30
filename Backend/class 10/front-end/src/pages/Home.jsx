import { useEffect, useState } from "react";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { Box, svgIconClasses } from "@mui/material";
import { db } from "../firebase";
import ProductCard from "../Components/ProductCard";
import TransitionsModal from "../Components/AppModal";
import axios from "axios";
import { BASEURL } from "../config";

const HomePage = () => {
  const [allPost, setAllPost] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      console.log(token, "token");
      const postData = await axios.get(`${BASEURL}/getpost`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(postData.data.data);
      setAllPost([...postData.data.data]);
    };
    getData();
  }, [refresh]);

  console.log("allPost", allPost);
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} marginTop={"20px"}>
        <TransitionsModal refresh={refresh} setRefresh={setRefresh} />
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
        {allPost.map((product, index) => {
          console.log("product", product);
          return <ProductCard productObj={product} key={product._id} />;
        })}
      </Box>
    </>
  );
};

export default HomePage;
