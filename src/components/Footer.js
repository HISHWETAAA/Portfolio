import React from 'react'
import { Col, Container ,Row} from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/icons8-github.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import logo from "../assets/img/logo.svg";
const Footer = () => {
  return (
   <footer className='Footer'>
    <Container>
        <Row className="align-item-center">
            <Col sm={6}>
            <img  className="logo" src={logo} alt="logo"/>
            </Col>
            <Col sm={6} className='text-center text-sm-end col2'>
            <div className='social-icons2'>
                <a href="https://www.linkedin.com/in/shweta-angural-68256228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt='linkedin'/></a>
                <a href="https://github.com/HISHWETAAA"><img src={navIcon2} alt='github'/></a>
                <a href="https://www.instagram.com/its.shweta2407?igsh=MTQ0Mmp4eGRiMDhrdw=="><img src={navIcon3} alt='insta'/></a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
            </Col>
        </Row>
    </Container>
   </footer>
  )
}

export default Footer
