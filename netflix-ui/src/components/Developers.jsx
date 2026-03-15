
import React from 'react'
import {Link} from 'react-router-dom'
import Penn from './Deveeloper/penn.jpg'
import Victoria from './Deveeloper/victoria.jpg'
import Taylor from './Deveeloper/taylor.jpg'
import Tony from './Deveeloper/joe.png'
import './Deveeloper/style.css'
const Developers = () => {
    return (
      <>
     
      <section class="main">
      <h1 className='headingB'>Our Team</h1>
       <div className="mainB">

     
      <div class="profile-card">
        <div class="image">
        <img src={Penn} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>PENN BADGLEY</h2>
        <span>MERN Stack Developer</span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-reddit"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Design</li>
              <li>CSS</li>
              <li>React</li>
              <li>Figma</li>
              <li>NFTs</li>
            </ul>
            </div>
        </div>

        <div class="profile-card">
        <div class="image">
        <img src={Victoria} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>VICTORIA PEDRETTI</h2>
        <span>MERN Stack Developer </span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-reddit"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6>Skills</h6>
            <ul>
              <li>MONGO DB</li>
              <li>REACT</li>
              <li>EXPRESS</li>
              <li>NODE JS</li>
              <li>JAVA</li>
              <li>JAVASCRIPT</li>
              <li>C#</li>
            </ul>
            </div>
        </div>

        <div class="profile-card">
        <div class="image">
        <img src={Taylor} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>TAYLOR SWIFT</h2>
        <span>Developer & Designer</span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-reddit"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6 className='h6'>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            </div>
        </div>

        <div class="profile-card">
        <div class="image">
        <img src={Tony} alt="" class="profile-pic"/>
        </div>
        <div class="text">
        <h2>JOE ALWYN</h2>
        <span>Developer & Designer</span>
        </div>
       
          <div class="social-icons">
            <div class="icon">
              <Link id="a1" href="/"><i class="fab fa-reddit"></i></Link>
            </div>
            
            <div class="icon">
              <Link id="a3" href="#"><i class="fab fa-github"></i></Link>
            </div>
            <div class="icon">
              <Link id="a2" href="#"><i class="fab fa-linkedin"></i></Link>
              </div>
            </div>
            <div class="skills">
            <h6 className='h6'>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Design</li>
              <li>CSS</li>
              <li>React</li>
              <li>Figma</li>
              <li>NFTs</li>
            </ul>
            </div>
        </div>
        </div>
      </section>
      
      </>
      );
}

export default Developers