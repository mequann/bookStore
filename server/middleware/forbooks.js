import multer from "multer";
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./Resources')
    },
    filename:(req,file,callback)=>{
        callback(null,`${Date.now()}_${file.originalname}`)
    }
})
const fileChecker=(req,file,callback)=>{
    if(file.mimtype!=='application/pdf') {
        callback(new Error('only pdf formats are supported'))
        
    }

    else{
        callback(null,true)
    }
}
const pdfUploader=multer({
    storage,
    fileFilter:fileChecker
})
export default pdfUploader.single('book_file')