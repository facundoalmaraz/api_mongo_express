import mongoose from "mongoose";

const Task = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true,
        versionKey: false,
    });

export default mongoose.model("Tasks", Task);