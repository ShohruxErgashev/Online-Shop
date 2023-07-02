import { Schema, model } from "mongoose";
//data schema
const conatctSchema = new Schema ({
    name: String,
    optionn: String,
    number: String,
}, {timestamps: true} );

//data model
const Contact = model("buyurtmalar", conatctSchema);

export default Contact;