import connectionInformation from "../schema/database.js";
let registration=(req,res)=>{
    const{user_first_name,user_last_name,user_email,user_password}=req.body
    let insertInfo=`INSERT INTO registrations(user_first_name,user_last_name,user_email,user_password)
     values('${user_first_name}','${user_last_name}','${user_email}','${user_password}')` 

connectionInformation.query(insertInfo,(err,data,field)=>{
    if(err) {
        console.log(err.message)
    }
    else{
        res.status(200).json({msg:"regietration is successfull"})
    }
})
}
export default registration