import { NextResponse } from "next/server";
import Contact from "@/app/models/contact";
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";

export async function POST(req) {
    const {fullname, email, message, grade} = await req.json();

    console.log("Full Name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);
    console.log("Grade: ", grade)

try {
    await connectDB();
    await Contact.create({fullname, email, message, grade})

    return NextResponse.json({
        msg: ["Message sent successfully"], success: true
    })
    } catch(error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({msg: errorList});
        } else {
            return NextResponse.json({ msg: "Unable to send message."});
        }
    }
}