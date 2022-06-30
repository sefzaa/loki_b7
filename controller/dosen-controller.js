const model = require('../models/indexmodel')
const { Op, QueryTypes  } = require("sequelize");
const sequelize = model.dbconfig
const jwt = require('jsonwebtoken')
const controller = {}

controller.listmatkul = async (req, res) => {

  const token = req.cookies.jwt
  if (!token) return res.status(200).send("tidak ada token")

  const nip = jwt.verify(token, process.env.TOKEN_SECRET)
  const matkul = await sequelize.query(
    'SELECT course_plans.code, course_plans.name, course_plans.credit, course_plans.rev, course_plans.semester, course_plans.id, course_plans.created_by, course_plans.created_at FROM course_plan_lecturers JOIN course_plans ON course_plan_lecturers.course_plan_id = course_plans.id JOIN lecturers ON course_plan_lecturers.lecturer_id = lecturers.id WHERE lecturers.reg_id= :nipDosen;',
    {
        replacements: { nipDosen: nip.email },
        type: QueryTypes.SELECT
    }
)
    res.render("dosendashboard", {matkul})   
}

controller.detailmatkul = async (req, res) => {
  const id = req.params.id
  const kurikulum = await model.curricula.findAll()
  const rps = await model.course_plans.findOne({where:{id} })
  const cpmk = await model.course_los.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'type', 'code', 'name', 'parent_id']})
  const cpl = await model.curriculum_los.findAll({where:{curriculum_id : 1} ,attributes: [ 'id', 'code', 'name']})
  const referensi = await model.course_plan_references.findAll({where:{[Op.and]: [{course_plan_id : id},{description: 'Utama'}] }})
  const referensi2 = await model.course_plan_references.findAll({where:{[Op.and]: [{course_plan_id : id},{description: 'Pendukung'}] }})
  const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})
  const mingguan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week','material','method','student_experience']})
  res.render("dosendetail", {rps, cpmk, cpl, referensi,referensi2, penilaian, mingguan, kurikulum})
  
}

controller.tambahRPS = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where:{id} ,attributes: [ 'id', 'code', 'name', 'semester', 'credit']})
  const cpmk = await model.course_los.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'type', 'code', 'name', 'parent_id']})
  const referensi = await model.course_plan_references.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'title', 'author', 'publisher', 'year', 'description']})
  const mingguan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week','material','method','student_experience']})
  res.render("dosen-tambahRPS", {rps,cpmk,referensi,mingguan})
}

controller.editRPS = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where:{id} ,attributes: [ 'id', 'code', 'name', 'semester', 'credit']})
  const cpmk = await model.course_los.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'type', 'code', 'name', 'parent_id']})
  const referensi = await model.course_plan_references.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'title', 'author', 'publisher', 'year', 'description']})
  const mingguan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week','material','method','student_experience']})
  const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})
  res.render("dosen-editRPS", {rps,cpmk,referensi,mingguan,penilaian})
}

//Revisi
controller.revisirps = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where:{id} ,attributes: [ 'id', 'code', 'name', 'semester', 'credit']})

  res.render("dosenrevisi", {rps})
}

//CPMK
controller.cpmk = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where:{id} ,attributes: [ 'id', 'code', 'name', 'semester', 'credit']})
  const cpmk = await model.course_los.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'type', 'code', 'name', 'parent_id']})
  const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})
  const mingguan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week','material','method','student_experience']})
  res.render("dosenCPMK", {rps, cpmk, penilaian, mingguan})
}


controller.tambahcpmk = async (req, res) => {
  const {course_plan_id,name,code, parent_id,type} = req.body

  const CPMKAda = await model.course_los.findOne({ 
      where:{[Op.and]: [{ course_plan_id }, {code}]} })
    if (CPMKAda) return res.status(400).send('CPMK sudah ada')

    try{
      await model.course_los.create({
        course_plan_id,
        name,
        code,
        parent_id,
        type
    })
    console.log("CPMK berhasil ditambahkan");
    res.redirect('back')
  }catch(err){
    console.log(err)
  }
}
controller.editcpmk = async (req, res) => {
  const {id,name,code, parent_id,type} = req.body

    try{
      await model.course_los.update({
        name,
        code
    },{
      where:{ id }
    })
    res.redirect('back')
  }catch(err){
    console.log(err)
  }
}
controller.hapuscpmk = async (req, res) => {
  const { id } = req.body
    try{
        await model.course_los.destroy({
            where: {id}
        })
        console.log(`CPMK berhasil di hapus`)
        res.redirect('back')
    } catch(err){
        console.log(err);
    }
}

//referensi
controller.referensi = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where:{id} ,attributes: [ 'id', 'code', 'name', 'semester', 'credit']})
  const referensi = await model.course_plan_references.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'title', 'author', 'publisher', 'year', 'description']})

  res.render("dosenreferensi", {rps, referensi})
}

controller.tambahReferensi = async (req, res) => {
  const {course_plan_id, title, author, publisher, year, description} = req.body

  const referensiAda = await model.course_plan_references.findOne({ 
    where:{[Op.and]: [{course_plan_id},{ title }, { author }, { publisher}]} })
    if (referensiAda) return res.status(400).send('Referensi sudah ada')

    try{
      await model.course_plan_references.create({
        course_plan_id,
        title,
        author,
        publisher,
        year,
        description
    })
    res.redirect('back')
  }catch(err){
    console.log(err)
  }
}

controller.editReferensi = async (req, res) => {
  const {id, title, author, publisher, year, description} = req.body


    try{
      await model.course_plan_references.update({
        title,
        author,
        publisher,
        year,
        description
    },{
      where:{ id }
    })
    res.redirect('back')
  }catch(err){
    console.log(err)
  }
}

controller.hapusreferensi = async (req, res) => {
  const { id } = req.body

    try{
        await model.course_plan_references.destroy({
            where: {id}
        })
        console.log(`referensi berhasil di hapus`)
        res.redirect('back')
    } catch(err){
        console.log(err);
    }
}

//Penilaian
controller.penilaian = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where:{id} ,attributes: [ 'id', 'code', 'name', 'semester', 'credit']})
  const penilaian = await model.course_plan_assessments.findAll({where:{course_plan_id : id} ,attributes: [ 'id','name','percentage']})

  res.render("dosenPenilaian", {rps, penilaian})
}

controller.tambahPenilaian = async (req, res) => {
  const {course_plan_id,name, percentage, flag} = req.body

  const penilaianAda = await model.course_plan_assessments.findOne({ 
    where:{[Op.and]: [{course_plan_id},{ name }]} })
    if (penilaianAda) return res.status(400).send('penilaian sudah ada')

    try{
      await model.course_plan_assessments.create({
        course_plan_id,
        name,
        percentage,
        flag
    })
    res.redirect('back')
  }catch(err){
    console.log(err)
  }
}
controller.editPenilaian = async (req, res) => {
  const {id, name, percentage, flag} = req.body

    try{
      await model.course_plan_assessments.update({
        name,
        percentage,
        flag
    },{
      where:{ id }
    })
    res.redirect('back')
  }catch(err){
    console.log(err)
  }
}
controller.hapusPenilaian = async (req, res) => {
  const { id } = req.body
    try{
        await model.course_plan_assessments.destroy({
            where: {id}
        })
        console.log(`Penilaian berhasil di hapus`)
        res.redirect('back')
    } catch(err){
        console.log(err);
    }
}



//pertemuan Mingguan
controller.mingguan = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where:{id} ,attributes: [ 'id', 'code', 'name', 'semester', 'credit']})
  const mingguan = await model.course_plan_details.findAll({where:{course_plan_id : id} ,attributes: [ 'id', 'week','material','method','student_experience']})

  res.render("dosenMingguan", {rps, mingguan})
}
controller.tambahMingguan = async (req, res) => {
  const {course_plan_id,week,material,method,student_experience} = req.body

  const mingguanAda = await model.course_plan_details.findOne({ 
    where:{[Op.and]: [{course_plan_id},{ week }]}})
    if (mingguanAda) return res.status(400).send('Penilaian Mingguan sudah ada')

    try{
      await model.course_plan_details.create({
        course_plan_id,
        week,
        material,
        method,
        student_experience
    })
    res.redirect('back')
  }catch(err){
    console.log(err)
  }
}
controller.editMingguan = async (req, res) => {
  const {id, week,material,method,student_experience} = req.body

    try{
      await model.course_plan_details.update({
        week,
        material,
        method,
        student_experience
    },{
      where:{ id }
    })
    res.redirect('back')
  }catch(err){
    console.log(err)
  }
}
controller.hapusMingguan = async (req, res) => {
  const { id } = req.body
    try{
        await model.course_plan_details.destroy({
            where: {id}
        })
        console.log(`Pertemuan Mingguan berhasil di hapus`)
        res.redirect('back')
    } catch(err){
        console.log(err);
    }
}


module.exports = controller