import connectionInformation from "../schema/database.js";

let login = (req, res) => {
  const { user_email, user_password } = req.body;
  if (!user_email || !user_password) {
    res.json("please provide all fields");
  } 
  else {
    let emailAndPasswordchecker = `select user_email,user_password from registrations where user_email='${user_email}'`;
    connectionInformation.query(emailAndPasswordchecker, (err, data, filed) => {
      if (err) {
        console.log(err.message);
      } 
      else {
        if (data) {
            let resultfilter = data.find((userData) => {
                return userData.user_email === user_email;
              });
              if (resultfilter) {
                let resultfilter2=data.find(userData=>{
                    return userData.user_password === user_password;
                });
                
                if (resultfilter2) {
                    return res.json({
                        message: "successfully logged",
                        route: "/dashboard",
                      });
                 
                } 
                else {
                     return res.json({
                        msg:"incorrect password",
                        route:"/login"
                    });
                 
                }
              }
              else{
                res.json("the email you provid is not correct")
              }
        
        } 
        else {
            return res.json({
                msg: "there is no user by this email",
                route:"/signup"
              });
        }
      }
    });
  }
};
export default login;
