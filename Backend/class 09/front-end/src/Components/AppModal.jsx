import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { BASEURL } from "../config";
import { getUser } from "../utils/functions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "12px",
};

export default function TransitionsModal({ refresh, setRefresh }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [productName, setproductName] = React.useState("");
  const [productDesc, setproductDesc] = React.useState("");
  const [loader, setloader] = React.useState(false);

  const addTodo = async (e) => {
    try {
      e.preventDefault();
      setloader(true);

      const user = getUser();
      const objToSend = {
        title: productName,
        desc: productDesc,
        userId: user._id,
      };
      const response = await axios.post(`${BASEURL}/createpost`, objToSend);
      if (response.data.status) {
        console.log("post created", response);
        setRefresh(!refresh);
      } else {
        alert(response.data.message);
      }

      setloader(false);
      handleClose();
    } catch (error) {
      setloader(false);
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Product
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ borderBottom: "1px solid black" }}>
              <h1 className="text-3xl font-bold">ADD PRODUCT</h1>
            </Box>
            <Box component={"form"} onSubmit={addTodo}>
              <input
                className="border my-4 border-stone-500 rounded-lg p-3 w-full"
                type="text"
                placeholder="Product Name"
                onChange={(e) => setproductName(e.target.value)}
              />
              {/* <input
                className="border my-4 border-stone-500 rounded-lg p-3 w-full"
                type="text"
                placeholder="Product Price"
                onChange={(e) => setproductPrice(e.target.value)}
              /> */}

              <textarea
                type="text"
                className="border my-4 border-stone-500 rounded-lg p-3 w-full"
                placeholder="Product Desc"
                onChange={(e) => setproductDesc(e.target.value)}
              />
              <input type="file" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  gap: "10px",
                }}
              >
                <Button variant="contained" type="submit">
                  {loader ? (
                    <CircularProgress size={"18px"} sx={{ color: "white" }} />
                  ) : (
                    "Add"
                  )}
                </Button>
                <Button onClick={handleClose} variant="contained" color="error">
                  CLOSE
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
