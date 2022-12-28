import mongoose from "mongoose";

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles",
    },
},{
    timestamps: true,
    versionKey: false,
}
);

export default mongoose.model("Users", Users);

