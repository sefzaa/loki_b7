const model = require('../models/indexmodel')
const { Op, QueryTypes } = require("sequelize")
const sequelize = model.dbconfig;
const controller = {}

controller.listMatakuliah = async (req, res) => {
    const kurikulum = await model.curricula.findAll()
    const matkul = await model.courses.findAll()
    // const rps = await model.course_plans.findAll()
    res.render('mahasiswamatkul', {kurikulum, matkul});
}

controller.detailrps = async (req, res) => {
    const id = req.params.id
    const matkul = await model.courses.findOne({ where: { id: id }})
    res.render('mahasiswadetail', {matkul})
}

module.exports = controller;