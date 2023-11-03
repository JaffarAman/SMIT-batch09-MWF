import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [imageFile, setImageFile] = useState("");
  const [imgPr, setimgPr] = useState("");

  const uploadImage = async () => {
    console.log(imageFile, "imageFile");
    const formData = new FormData();
    formData.append("image", imageFile);
    const response = await axios.post(
      "http://localhost:5000/api/uploadimage",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setimgPr(response.data.data.secure_url);
  };

  return (
    <>
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
      <br />
      <br />
      <br />
      <button onClick={uploadImage}>UPLOAD</button>
      {imgPr && <img src={imgPr} />}
    </>
  );
}

export default App;
