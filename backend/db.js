import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_Url);
        console.log('Database Connected Successfully')
    }
    catch (error) {
        console.log(error);
        console.log('error connection databse')
    }
}

export default ConnectDB;