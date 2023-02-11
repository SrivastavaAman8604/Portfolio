import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const About = () => {
  return (
    <div id='about'>
      <div class="card">
        <span>About Me</span>
        <p class="info">Thanks for scrolling this far!! , I'm a multidisciplinary Front-End Developer from India who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites.</p>
        <div class="share">
          <a href="https://github.com/SrivastavaAman8604" target={'blank'}><AiOutlineGithub/></a>
          <a href="https://twitter.com/AmanSri69599917" target={'blank'}><AiOutlineTwitter/></a>
          <a href="https://www.linkedin.com/in/aman-srivastava-21b54b166/" target={'blank'}><AiOutlineLinkedin/></a>
        </div>
        <a href='https://drive.google.com/file/d/1dbio4y2_PlO_iaaU2qNGLxHPtC8zovW3/view' target={'blank'}>
          <button>Resume</button>
        </a>
      </div>

    <div class="container">
      <div class="box">
        <span class="title">My Ecosystem</span>
        <div>
          <button> HTML5</button>
          <button>CSS3</button>
          <button>Javascript</button>
          <button>Bootstrap</button>
          <button>TailwindCSS</button>
          <button>SASS/SCSS</button>
          <button>React.js</button>
          <button>Redux</button>
          <button>Next.js</button>
          <button>ChakraUI</button>
          <button>Firebase</button>
          <button>Git/GitHub</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
