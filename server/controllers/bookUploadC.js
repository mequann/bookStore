import connectionInformation from "../schema/database.js";
let uploadFile=(req,data,filed)=>{
    if(req.file) {
        let pdfFilename=req.file.filename;
        let pdfFilepath=req.file.path
        console.log(pdfFilename,pdfFilepath)

        
    }
}
export default uploadFile
