const model = require("../models/users");
const controller = {};

controller.retrieveAll = async (req, res) => {
  try {
    await model.findAll().then((result) => {
      if (result.length > 0) {
        res.status(200).json({
        message: "data user berhasil didapatkan",
        data: result,
        });
    } else {
        res.status(200).json({
        message: "data tidak ada",
        data: [],
        })
      }
    })
  } catch (error) {
    res.status(404).json({
      message: error,
    })
  }
}

module.exports = controller;
