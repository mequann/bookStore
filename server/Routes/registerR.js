import express from 'express'
import registration from "../controllers/registerC.js";
let registerRouter=express.Router()
registerRouter.post('/register',registration)
export default registerRouter