const express = require("express");
const app = express();
const PORT = 5000;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log("middleware chala ");

//   const userAuth = false;

//   if (userAuth) {
//     next();
//   } else {
//     res.json({
//       message: "USER NOT LOGIN ",
//     });
//   }
// });

const authMiddleWare = (req, res, next) => {
  const userAuth = true;
  if (userAuth) {
    next();
  } else {
    res.json({
      message: "USER NOT LOGIN ",
    });
  }
};

app.get("/user", (req, res) => {
  console.log("query", req.query);
  if (Object.keys(req.query).length) {
    res.json({
      message: "successfully get",
      status: true,
      data: ["Single USER DATA"],
    });
    return;
  }
  // db call
  res.json({
    message: "successfully get",
    status: true,
    data: ["ALL USERS DATA"],
  });
});

app.post("/createuser", [authMiddleWare], (req, res) => {
  const body = req.body;
  console.log(body);
  res.json({
    message: "successfully user create",
    status: true,
  });
});

app.put("/updateuser/:id", (req, res) => {
  console.log(req.body);
  console.log("param", req.params);
  res.json({
    message: "successfully user update",
    status: true,
  });
});
app.delete("/deleteuser", (req, res) => {
  res.json({
    message: "successfully user delete",
    status: true,
  });
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
