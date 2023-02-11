import React from 'react'
import { AiOutlineArrowUp, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import me from "../assets/logo8.png";

const Footer = () => {
  return (
    <footer>
      <aside>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#timeline">Timeline</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </aside>
      <div>
        <img src={me} alt="Founder" />

        <h2>Aman Srivastava</h2>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          
          <a href="https://www.linkedin.com/in/aman-srivastava-21b54b166/" target={'blank'}><AiOutlineLinkedin/></a>
          <a href="https://github.com/SrivastavaAman8604" target={'blank'}><AiOutlineGithub/></a>
          <a href="https://twitter.com/AmanSri69599917" target={'blank'}><AiOutlineTwitter/></a>
        </article>
      </aside>
      <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer
