import cors from "cors";
import express from "express";

import tableRoute from "./Routes/tableCreateR.js";
import connectionInformation from "./schema/database.js";
import registerRouter from "./Routes/registerR.js";
import loginRoute from "./Routes/loginR.js";
import inserbookRoute from "./Routes/insertbookR.js";
import getBookRoute from "./Routes/getAllbookR.js";

// server   
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//main route
app.use("/admin", tableRoute);
//user route
app.use("/user", registerRouter);
app.use("/user", loginRoute);
//book insert route
app.use("/user",  inserbookRoute);
//get all books
app.use("/user", getBookRoute);

// connection to database
function connecterCrator() {
  try {
    connectionInformation.connect((err, connection) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("data base coneection created successfully");
        app.listen(4000, () => {
          console.log("app is llistening through  port 4000");
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

connecterCrator();
export default connectionInformation;
   
 
