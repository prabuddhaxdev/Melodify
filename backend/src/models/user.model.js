import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type:string,
        required: true,
    },
    imageUrl: {
        type :String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
},{ timestamps : true} /* createdAt, updatedAt*/);

export const user = mongoose.model("User", userSchema);