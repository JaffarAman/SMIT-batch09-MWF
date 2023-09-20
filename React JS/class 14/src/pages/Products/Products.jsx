import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductsPage = () => {
  const param = useParams();
  console.log("param", param);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProductData(data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <h1>Products Page</h1>

      {productData.map((product, index) => {
        return (
          <div>
            <h1>Title: {product.title}</h1>
            <h1>Price: {product.price}</h1>
            <Link to={`/singleproduct/${product.id}`}>
              <button>Show Details</button>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ProductsPage;
