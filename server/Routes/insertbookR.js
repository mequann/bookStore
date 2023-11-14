import express from "express";
import uploadFile from "../controllers/bookUploadC.js";
import multerbook from "../middleware/forbooks.js";
let inserbookRoute = express.Router();

inserbookRoute.post("/postbook", multerbook, uploadFile);
export default inserbookRoute;
