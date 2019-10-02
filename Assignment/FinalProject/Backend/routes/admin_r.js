const express     = require('express')
const bodyParser  = require('body-parser')
const admin_router = express.Router()

admin_router.use(bodyParser.urlencoded({extended: true}))
//admin_router.use(bodyParser.json())
// admin_router.get('/', (req, res)=> res.send(`Got '/admin GET' Request`))// Keep for testing purpose

let admin_controller = require('../controllers/admin_c')

admin_router.get("/",       admin_controller.select_all)// Get all admins.
admin_router.get("/table",  admin_controller.records_in_table_form)// Get all admins & List in HTML Table.
admin_router.get("/:id",    admin_controller.select1_by_id)// Get a selected admin.
admin_router.post("/",      admin_controller.register)// Save an admin Record / Save Register Form data.
admin_router.post("/check", admin_controller.authenticate)// Check valid admin or not.
admin_router.delete("/:id", admin_controller.delete1)// Delete an admin Record
admin_router.put("/:id",    admin_controller.update1)// Delete an admin Record

module.exports = admin_router