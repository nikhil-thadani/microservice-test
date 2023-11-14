import {connect} from "mongoose";

const connectToDb = async () => {
    try {
        await connect(process.env.DB_URL);
    } catch(error) {
        console.log(error);
        throw new Error("Unable to connect to mongodb");

    }
};

export default connectToDb;