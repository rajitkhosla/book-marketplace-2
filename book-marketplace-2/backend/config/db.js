import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDB = async () => {
    try {
        console.log(process.env.DB_URI)
        const conn = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true,//TODO
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log(`MongodB is connected`)
    } catch (error) {
        console.log(`Error while connecting to mongodb ${error.message}`)

    }
};


export default ConnectDB