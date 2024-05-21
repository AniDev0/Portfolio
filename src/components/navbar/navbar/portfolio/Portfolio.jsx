import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items= [
    {
    id:1,
    title: "Interior Design Responsive Site (UI&UX)",
    img: "./interior.png",
    desc: "An responsive UI for an interior design website. It flawlessly adapts to any device, showcasing beautiful spaces and making navigation a breeze – perfect for inspiring clients on the go!",
    link: "https://docs.google.com/presentation/d/1K-fsBxDXX3BbrfU0SEl4OcZNb191QbUM/edit?usp=sharing&ouid=106480674068126585880&rtpof=true&sd=true"
    },
    {
    id:2,
    title: "React Cryptocurrency App",
    img: "./Cryptoapp1.png",
    desc: "It's all about empowering you to make informed decisions in the ever-changing world of crypto.  This app is built with ReactJS, so you know it's fast and responsive.",
    link: "https://docs.google.com/presentation/d/15sjQIOqiJ2P0HqqGKLSNXcyiMmqJAU5TVRraA7_6dXw/edit?usp=sharing"
    },
    {
    id:3,
    title: "Arcade App (UI&UX)",
    img: "./arcadeapp1.png",
    desc: "Ani’s Arcade is an app where users can view the games that are available at the local arcade. It offers the liberty for the users to view all the related information.",
    link: "https://docs.google.com/presentation/d/1vdP0J3O29VadwxH0ixQi0W2vmHRoldrb/edit?usp=sharing&ouid=106480674068126585880&rtpof=true&sd=true"
    },
    {
    id:4,
    title: "React Restaurant Website",
    img: "./homepageRestaurant.jpeg",
    desc: "It's easy to navigate, so hungry customers can find the menu, hours.  Maybe there's even a section with mouthwatering photos that'll have them booking a table right away.",
    link: "https://github.com/ThatOneMessedUpKid/CapstoneProjectMeta.git"
    },
]

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref,
        // offset:["start start", "end start"
    });
    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                     <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.link}>See an insight</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"],});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio