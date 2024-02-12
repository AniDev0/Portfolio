import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
         initial={{opacity:0, scale:0.5}} 
         animate={{opacity:1, scale:1}} 
         transition={{duration:0.5}}>Ani Dev</motion.span>
        <div className="social">
          <a href="https://www.instagram.com/_aniket__rana"><img src="/instagram.png" alt="" /></a>
          <a href="https://www.youtube.com/channel/UCDAsaNlB-7AkNYEAt84kfiA"><img src="/youtube.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/aniketrana3010/"><img src="/linkedin.png" alt="" /></a>
          <a href="https://dribbble.com/ThatOneSkinnyKid"><img src="/dribbble.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar