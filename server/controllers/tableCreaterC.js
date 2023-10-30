import{registration,booktable} from "../schema/table.js"
import connectionInformation from'../app.js'

let tableCreator=(req,res)=>{
   try {
    connectionInformation.query(registration,(err,result)=>{
        if(err) {
            console.log(err.message)
        }
        else{
            connectionInformation.query(booktable,(err,result)=>{
                if(err) {
                   console.log(err.message) 
                }
                res.status(200).json({msg:"all tables created successfully"})
                
            })
        }
    })
    
   } catch (error) {
    
    console.log(error.message)
   }
    

}
export default tableCreator