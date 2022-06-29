const model = require('../models/index')
const { Op, QueryTypes } = require("sequelize")
const sequelize = require('../config/database')
const controller = {}

controller.listMatakuliah = async (req, res) => {
    const kurikulum = await model.curricula.findAll()
    const matkul = await model.courses.findAll()
    // const rps = await model.course_plans.findAll()
    res.render('matakuliah_admin', {kurikulum, matkul});
}

controller.CPMK = async (req, res) => {
    const id = req.params.id
    const matkul = await model.courses.findOne({ where: { id: id }, attributes: ['name']})
    const rps = await model.course_plans.findOne({ where: { course_id: id }, attributes:['id', 'name']})
    // const rps = await model.course_plans.findAll()
    res.render('editmatakuliah_admin', {kurikulum, matkul});
}

controller.tambahMatkul = async (req, res) => {

    const { kurikulum,  kodeMatkul, nama, alias, SKS, semester, deskripsi } = req.body

    const matkulAda = await model.courses.findOne({ 
        where:{[Op.or]: [{ code: req.body.kodeMatkul }, { name: req.body.nama }]} })
    if (matkulAda) return res.status(400).send('Mata Kuliah sudah ada')


    try {
        await model.courses.create({
            curriculum_id: kurikulum,
            code: kodeMatkul,
            name: nama,
            alias_name: alias,
            credit: SKS,
            semester: semester,
            description: deskripsi
        })

        const id_course = await model.courses.findOne({where:{ code: kodeMatkul }, attributes: ['id']})
        await model.course_plans.create({
            curriculum_id: kurikulum,
            course_id: id_course.id,
            rev: 0,
            code: kodeMatkul,
            name: nama,
            alias_name: alias,
            credit: SKS,
            semester: semester,
            description: deskripsi
        });
        res.redirect('back')
    } catch (error) {
        console.log(error)
    }

    
}

controller.MenentukanDosen = async (req, res) => {
    const id = req.params.id
    const matkul = await model.courses.findOne({ where: { id: id }, attributes: ['name']})
    const rps = await model.course_plans.findOne({ where: { course_id: id }, attributes:['id', 'name']})
    const dosenMatkul = await sequelize.query(
        'SELECT course_plan_lecturers.course_plan_id, course_plan_lecturers.lecturer_id, lecturers.name, lecturers.reg_id FROM lecturers LEFT JOIN course_plan_lecturers ON course_plan_lecturers.lecturer_id = lecturers.id WHERE course_plan_lecturers.course_plan_id= :idrps ORDER BY lecturers.name;',
        {
            replacements: {idrps: rps.id},
            type: QueryTypes.SELECT
        }
    )

    const dosen = await model.lecturers.findAll({
        order: ['name'],
        attributes: ['id','name']
    })

    res.render("admin-memilihdosen", {dosen, matkul, rps, dosenMatkul });
}

controller.tambahDosenMatkul = async (req, res) => {
    const { idrps, iddosen } = req.body;

    const dosenAda = await model.course_plan_lecturers.findOne({
        where:{[Op.and]: [{ course_plan_id: req.body.idrps }, { lecturer_id: req.body.iddosen }]}
    })
   if(dosenAda) return res.status(404).send('Dosen sudah ada di mata kuliah ini')
    
  try {
    await model.course_plan_lecturers.create({
        course_plan_id: idrps,
        lecturer_id: iddosen,
        creator: 0
    }) 
    res.redirect("back")
  } catch (err) {
    console.log(err)
  }
}

controller.hapusDosenMatkul = async (req, res) => {
    const { idrps, iddosen } = req.body

    try{
        await model.course_plan_lecturers.destroy({
            where:{
                course_plan_id: idrps,
                lecturer_id: iddosen
            }
        })
        console.log(`Dosen dengan id : ${iddosen} berhasil dihapus`)
        res.redirect('back')
    } catch(err){
        console.log(err);
    }
}

controller.dashboard = async (req, res) => {
    res.render('admin-dashboard')
}

controller.laporan = async (req, res) => {
    // const id = req.params.id
    // const matkul = await model.courses.findOne({ where: { id: id }})
    res.render('admin-laporan');
}

module.exports = controller;