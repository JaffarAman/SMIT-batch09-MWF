const express = require("express");
const app = express();
const PORT = 5000;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({
    message: "SERVER UP",
  });
});

app.post("/createuser", (request, response) => {
  //   console.log(request.url);
  //   console.log(request.method);
  //   console.log(request.body);
  const { name, gender, age } = request.body;

  console.log(name, gender, age);

  if (!name || !gender || !age) {
    response.json({
      message: "required field missing",
      status: false,
      data: null,
    });
    return;
  }

  console.log("code runnig");
  response.json({
    message: "user create",
    status: true,
    data: {
      name,
      gender,
      age,
    },
  });
});

app.put("/updateuser", (request, response) => {
  console.log("update", request.body);
});

app.delete("/deleteuser", (request, response) => {});

// C ==> create=>post
// R ==> read  => get
// U ==> update => put  /patch
// D ==> delete => delete

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
