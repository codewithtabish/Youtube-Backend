import app from "./app.js";
import connectWithDB from "./db/db.js";
import  dotenv from 'dotenv'


dotenv.config({path:"./.env"})






connectWithDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server started on port 🌍🕚🕚`,process.env.PORT);
    });

}).catch((err)=>console.log("The connection error is ",err))



