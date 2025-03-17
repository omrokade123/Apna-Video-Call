import  mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
    {
       user_id: {type:String},
       meetingCode:{
        type:String,
        required: true,
       },
       date: {
        type:Date,
        default: Date.now,
        required: true,
       }
    }
)





export const Meeting =mongoose.model("Meeting",meetingSchema);