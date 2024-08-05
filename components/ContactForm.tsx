"use client";
import {useState} from "react";

export default function ContactForm() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] =  useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Full Name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);

        const res = await fetch('api/contact', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                fullname,
                email,
                message,
            }),
        });

        const {msg, success} = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setFullname('');
            setEmail('');
            setMessage('');
        }
    };

    return (
      //h-screen 
       <div className="max-w-[1240px] m-auto p-4 ">
        <h1 className="text-2xl font-bold text-center p-4">Let&apos;s work together</h1>
        <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
                <input onChange={e => setFullname(e.target.value)} value={fullname} id='fullname' className="border shadow-lg p-3" type="text" placeholder="Name" />
                <input onChange={e => setEmail(e.target.value)} value={email} id='email' className="border shadow-lg p-3" type="email" placeholder="Email" />
            </div>
            <textarea onChange={e => setMessage(e.target.value)} value={message} id='message' className="w-full" cols={30} rows={10} placeholder="Message"></textarea>
            <button className="border shadow-lg p-3 w-full mt-2" type="submit">Submit</button>
        </form>
        <div className='bg-slate-100 flex flex-col'>
            {error && 
                error.map((e, index) => (
                    <div key={index} className={`${success ? "text-green-800" : "text-red-600"} px-5 py-2`}>{e}</div>
                ))}
        </div>
       </div>       

)};