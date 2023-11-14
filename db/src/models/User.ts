import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
    },
    orders: [{type: mongoose.Types.ObjectId, ref: "Orders"}],
    cart: [{type: mongoose.Types.ObjectId, ref: "Products"}],
});


export default mongoose.model('User', schema);