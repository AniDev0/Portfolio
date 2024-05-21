import "./contact.scss";
import {motion, useInView} from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition: {
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};

const Contact = () => {
    const formRef = useRef();
    const ref= useRef();
    const [error,setError]  = useState(false)
    const [success,setSuccess]  = useState(false)



    const isInView = useInView(ref, {margin: "-100px"});

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_h7iptjs', 'template_0cq8on4', formRef.current, {
            publicKey: 'FpZQ6j-oYDLoiJChA',
          })
          .then(
            () => {
                setSuccess(true);
              
            },
            (error) => {
                setError(true);
            },
          );
      };
  return (
    <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work Together!</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>aniketrana03010@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Linkedin</h2>
                <span>aniketrana3010</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+91 8979114391</span>
            </motion.div>

        </motion.div>
        <div className="formContainer">
            <motion.div 
             className="phoneSvg" 
             initial={{opacity:1}} 
             whileInView={{opacity:0}} 
             transition={{ delay: 2, duration: 1}}
            >
                <svg width="550px" height="550px" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="send-mail">
                    <motion.path
                         strokeWidth={0.2}
                         fill="none"
                         initial={{pathLength: 0}} 
                         whileInView={{pathLength: 1}} 
                         transition={{duration: 3}}
                         d="M20.5,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.41L9.38,15.3a3,3,0,0,0,4.24,0l1.64-1.64a1,1
                    ,0,1,0-1.42-1.42L12.2,13.88a1,1,0,0,1-1.4,0L4.91,8H11.5a1,1,0,0,0,0-2h-7a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h14
                    a3,3,0,0,0,3-3V15A1,1,0,0,0,20.5,14Zm1.71-8.71-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1
                    ,1,0,0,0,1.42,1.42l1.29-1.3V11a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.21,5.29Z"/>
                </svg>

            </motion.div>
            <motion.form   
             ref={formRef}
             onSubmit={sendEmail}   
             initial={{opacity:0}} 
             whileInView={{opacity:1}} 
             transition={{ delay: 3, duration: 1}}>
                <input type="text" required placeholder="Name" name="name" />
                <input type="email" required placeholder="Email" name="email" />
                <textarea rows={8} placeholder="Message" name="message" />
                <button>Send</button>
                {error && "Error"}
                {success && "Success"}
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact