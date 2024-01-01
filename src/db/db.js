import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
const connectWithDB=async()=>{
    console.log(process.env.MONGO_DB_URI)
    try {
        const connectioInstance=await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        console.log("MongoDB Connected ",connectioInstance.connection.host)
        
    } catch (error) {
     console.error('Error connecting to the database:', error.message);
    process.exit(1);

    }
}

export default connectWithDB