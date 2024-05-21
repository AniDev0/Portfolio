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
                <h2>UI design</h2>
                <p><b>
                I translate user needs into beautiful, user-friendly interfaces. Think buttons, icons, layouts – basically everything you see and interact with on an app or website. I make it pretty and easy to use. </b>
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "white", color: "black"}}>
                <h2>Web Design</h2>
                <p><b>
                I breathe life into website mockups with ReactJS and JavaScript. 
                I don't just design the look, I code it to work too.  Think clean interfaces, smooth animations, and lightning-fast loading times – that's my happy place.</b>
                </p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box" whileHover={{background: "white", color: "black"}}>
                <h2>Branding</h2>
                <p><b>
                I craft brand experiences. I take a brand's voice and translate it into visual elements that users see and feel. It's about building a cohesive look that resonates, making sure every button, screen, and interaction reflects the brand's personality</b>
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services