import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/icons8-github.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


const NavBar = () => {
    const [activelink,setActivelink]=useState('home');
    const [scrolled,setScrolled]=useState('false');


    useEffect(()=>{
        const onscroll=()=>{
            if(window.scrollY>50){
                setScrolled('true');
            }
            else{
                setScrolled('false');
            }
        }

        window.addEventListener("scroll",onscroll);

        return()=> window.removeEventListener("scroll",onscroll)
    },[])

    const onUpdateActiveLink=(value)=>{
        setActivelink(value);
    }
  return (
    <Navbar expand="lg" className={ scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt='logo'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activelink==='home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activelink==='skills' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activelink==='projects' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('pojects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icons'>
                <a href='https://www.linkedin.com/in/shweta-angural-68256228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={navIcon1} alt=" linkedin"></img></a>
                <a href='https://github.com/HISHWETAAA '><img src={navIcon2} alt=" github "></img></a>
                <a href='https://www.instagram.com/its.shweta2407?igsh=MTQ0Mmp4eGRiMDhrdw=='><img src={navIcon3} alt=" insta"></img></a>
            </div>
            <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
