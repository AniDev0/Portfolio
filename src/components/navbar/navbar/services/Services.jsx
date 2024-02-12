import "./services.scss";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1
        }

    }
}

const Services = () => {

  const ref= useRef()
  const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} 
    // for mobile resolution adjustment removed isInView && before "animate"
    animate={ "animate"
    } >
        <motion.div className="textContainer" variants={variants}>
            <p>
                I design sleek interfaces and develop functional code 
                <br/>for seamless user experiences.
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people2.jpg" alt=""/>
                <h1>
                    <motion.b whileHover={{color: "#a594f9"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color: "#a594f9"}}>For Your</motion.b> Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background: "white", color: "black"}}>
                <h2>Branding</h2>
                <p><b>
                    Lorem ipsum dolor sit amet. Aut illum Quis id voluptas error 
                    est iusto veniam in animi itaque id repellendus numquam et 
                    dignissimos alias et nostrum possimus!</b>
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "white", color: "black"}}>
                <h2>Branding</h2>
                <p><b>
                    Lorem ipsum dolor sit amet. Aut illum Quis id voluptas error 
                    est iusto veniam in animi itaque id repellendus numquam et 
                    dignissimos alias et nostrum possimus!</b>
                </p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{background: "white", color: "black"}}>
                <h2>Branding</h2>
                <p><b>
                    Lorem ipsum dolor sit amet. Aut illum Quis id voluptas error 
                    est iusto veniam in animi itaque id repellendus numquam et 
                    dignissimos alias et nostrum possimus!</b>
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services