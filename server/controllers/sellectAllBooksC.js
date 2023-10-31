import connectionInformation from "../schema/database.js";
let getAllInfo=(req,res)=>{
    let getAllBooks=`select * from bookTable`
    connectionInformation.query(getAllBooks,(err,data,field)=>{
        if(err) {
            console.log(err.message)
        }
        else{
          return  res.json({
                dataformDB:data
            })
        }

    })
}
export default getAllInfo
