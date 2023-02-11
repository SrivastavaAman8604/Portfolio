import React,{useRef} from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import me from "../assets/logo8.png";

const Home = () => {

    const clientCount = useRef(null); 
    const projectCount = useRef(null);

    const animationClientCount = ()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(e)=>(clientCount.current.textContent=e.toFixed()),
        })
    }

    const animationProjectsCount = ()=>{
        animate(0,500,{
            duration:1,
            onUpdate:(e)=>(projectCount.current.textContent=e.toFixed()),
        })
    }

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: "0",
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: "0",
                opacity: 1,
            },
        }
    }

  return (
    <div id='home'>
      <section>
        <div>
            <motion.h1  {...animations.h1}>
                Hi, I Am <br/> Aman Srivastava
            </motion.h1>
            <Typewriter 
                options={{
                    // strings:["A Developer" , "A Designer" , "A Creator"],
                    strings:["A Web Developer" , "A Front-End Developer","A Designer"],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    wrapperClassName:"typewriterpara",
                }}
            />
            <div>
                <a href="mailto:aman.srivastava2639@gmail.com">Say Hello 👋</a>
                <a href="#work">Projects <BsArrowUpRight/> </a>
            </div>
            <article>
                <p>
                    +<motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                </p>
                <span>Clients Worldwide</span>
            </article>
            <aside>
                <article>
                    <p>
                        +<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
                    </p>
                    <span>Projects Done </span>
                </article>
                <article data-special>
                    <p>Contact</p>
                    <span>aman.srivastava2639@gmail.com </span>
                </article>
            </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Aman" />
      </section>
      <a href='#work'><BsChevronDown/></a>
    </div>
  )
}

export default Home
