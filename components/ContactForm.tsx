"use client";
import {useState} from "react";
import Link from "next/link";

export default function ContactForm() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [grade, setGrade] = useState('');
    const [error, setError] =  useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Full Name: ", fullname);
        console.log("Email: ", email);
        console.log("Grade: ", grade);
        console.log("Message: ", message);

        const res = await fetch('api/contact', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                grade,
                message,
            }),
        });

        const {msg, success} = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setFullname('');
            setEmail('');
            setGrade('');
            setMessage('');
        }
    };

    return ( 
       <div className="">
        <h1 className="text-blue-800 text-4xl text-center">Become a Member</h1>
        <div className="w-full flex justify-center items-center">
            <hr className="hr-1 my-6 w-1/12"/>
        </div>
        <div className="w-full flex justify-center items-center">
            <form className="flex flex-col justify-center items-center w-1/2 gap-y-4" onSubmit={handleSubmit}>
                <p className="text-white text-xl text-center">Be the first to access updates, monthly newsletters, and more!</p>
                <input onChange={e => setFullname(e.target.value)} value={fullname} id='fullname' className="w-full bg-transparent border-[#9ca3af] border-2 p-3 text-white" type="text" placeholder="Name*" />
                <input onChange={e => setEmail(e.target.value)} value={email} id='email' className="w-full bg-transparent border-[#9ca3af] border-2 p-3 text-white" type="email" placeholder="Email*" />
                <input onChange={e => setGrade(e.target.value)} value={grade} id='grade' className="w-full bg-transparent border-[#9ca3af] border-2 p-3 text-white" type="text" placeholder="Grade*" />
                <textarea onChange={e => setMessage(e.target.value)} value={message} id='message' className="w-full bg-transparent border-[#9ca3af] border-2 p-3 text-white" placeholder="I'm interested in (ex. blog, specific topics/workshops)"></textarea>
                <button className="bg-blue-900 px-8 py-4 text-white font-semibold" type="submit">Send</button>
            </form>
        </div>
        <div className=''>
            {error && 
                error.map((e, index) => (
                    <div key={index} className={`${success ? "text-green-800" : "text-red-600"}`}>{e}</div>
                ))}
        </div>
            <div className="text-white flex flex-col justify-center items-center mt-8 gap-y-2">
                <h1 className="text-2xl">MYAA</h1>
                <Link href='mailto:m.youthastro@gmail.com'>
                    <p className="text-blue-500 underline">m.youthastro@gmail.com</p>
                </Link>
            </div>
       </div>       

)};