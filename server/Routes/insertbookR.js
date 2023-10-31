import express from 'express'
import insertBook from '../controllers/bookinsertC.js'
import multerbook from'../middleware/forbooks.js'
let inserbookRoute=express.Router()
inserbookRoute.post('/postbook',multerbook,insertBook)
export default  inserbookRoute