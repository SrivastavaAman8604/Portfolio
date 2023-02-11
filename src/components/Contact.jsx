import React, {useState} from 'react'
import vg from '../assets/234.png';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { addDoc , collection } from 'firebase/firestore';
import {db} from '../firebase';

const Contact = () => {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");
    const[disableBtn,setDisableBtn] = useState(false);

    // const[inputs,setInputs] = useState({ name:"", email:"", message:"" });

    // const changeHandler = (e) =>{
    //     setInputs({ ...inputs , [e.target.name]:e.target.value});
    //     console.log(inputs)
    // }

    const submitHandler = async(e) => {
        e.preventDefault();

        setDisableBtn(true);
        try {
            // console.log(name,email,message);
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                message,
            });
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message Sent");
            setDisableBtn(false);
        } catch (error) {
            toast.error("Error");
            console.log(error);
            setDisableBtn(false);
        }
    }

    const animation = {
        form: {
            initial: {
                x:"-100%",
                opacity:0,                
            },
            whileInView: {
                x: 0,
                opacity: 1,                
            },
        },
        button: {
            initial: {
                y:"-100%",
                opacity:0,                
            },
            whileInView: {
                y: 0,
                opacity: 1,                
            },
            transition:{
                delay:0.5,
            }
            },
    }

    return(
        <div id='contact'>
            <section>
                <motion.form onSubmit={submitHandler} {...animation.form}>
                    <h2>Contact me</h2>
{/* 
                    <input type="text" value={inputs.name} name="name" onChange={changeHandler} placeholder='Your Name' required/>
                    <input type="email" value={inputs.email} name="email" onChange={changeHandler} placeholder='Your Email' required/>
                    <input type="text" value={inputs.message} name="message" onChange={changeHandler} placeholder='Your Message' required/> 
*/}                    
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name' required/>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' required/>
                    <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your Message' required/>

                    <motion.button disabled={disableBtn} className={disableBtn ? "disableBtn" : ""} {...animation.button} type="submit">Send</motion.button>
                </motion.form>
                
            </section>
            <aside>
                <img src={vg} alt="Graphics" />
            </aside>
        </div>
    )
}

export default Contact