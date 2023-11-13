const PostModel = require("../model/PostSchema");

const createPostController = async (request, response) => {
  try {
    const body = request.body;

    const objToSend = {
      title: body.title,
      desc: body.desc,
      user_id: body.userId,
    };
    const data = await PostModel.create(objToSend);
    response.json({
      message: "POST successfully created",
      status: true,
      data,
    });
  } catch (error) {
    console.log(error.message);
    response.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

const getPostController = async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const query = {
      // full_name: "Ali",
      // age: 22,
    };
    // const userRecords = await UserModel.find(query);
    // const userRecords = await UserModel.find(query);

    const userRecords = await PostModel.find({});
    console.log(userRecords);
    res.json({
      message: "data get",
      status: true,
      data: userRecords,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

const singlePostController = async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;

    const userRecords = await PostModel.findById(id);
    console.log(userRecords);
    res.json({
      message: "data get",
      status: true,
      data: userRecords,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

const updatePostController = async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;

    const body = req.body;

    const userRecords = await PostModel.findByIdAndUpdate(id, body);
    console.log(userRecords);
    res.json({
      message: "update  user",
      status: true,
      data: userRecords,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

const deletePostController = async (req, res) => {
  try {
    // const userRecords = await UserModel.find({}); get all data's
    const { id } = req.params;
    const userRecords = await PostModel.findByIdAndDelete(id);
    console.log(userRecords);
    res.json({
      message: "delete  user",
      status: true,
      data: userRecords,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

module.exports = {
  createPostController,
  getPostController,
  singlePostController,
  updatePostController,
  deletePostController,
};
