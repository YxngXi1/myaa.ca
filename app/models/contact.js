import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [2, "Name must be larger than 2 character"],
        maxLength: [50, "Name must be less than 50 characters"],
    },

    email: {
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],

    },

    grade: {
        type: Number,
        required: [true, "Grade is required."],
    },

    message: {
        type: String,
        required: [true, "Message is required"],
    },

    date: {
        type: Date,
        default: Date.now,
    }
})

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;