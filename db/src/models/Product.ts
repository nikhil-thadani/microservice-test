import mongoose, {Schema} from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    orders: [{type: mongoose.Types.ObjectId, ref: "Orders"}],
    warranty: {
        type: String,
        require: true
    }
});


export default mongoose.model('Product', schema);