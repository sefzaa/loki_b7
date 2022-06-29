const indexcontrollers = {}

const users = require('./users')
indexcontrollers.users = users

const dosen = require('./dosen-controller')
indexcontrollers.dosen = dosen

const admin = require('./admin-controller')
indexcontrollers.admin = admin

const mahasiswa = require('./mahasiswa-controller')
indexcontrollers.mahasiswa = mahasiswa

module.exports = indexcontrollers;