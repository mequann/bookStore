import express  from "express";
import tableCreator from "../controllers/tableCreaterC.js";
let tableRoute=express.Router();
tableRoute.get('/createTable',tableCreator)
export default tableRoute