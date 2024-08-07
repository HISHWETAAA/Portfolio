import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorsharp from '../assets/img/color-sharp.png'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
   
  return (
    < >
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2> Skills</h2>
                    <p>Proficient in crafting responsive, user-centric interfaces using HTML, CSS, and JavaScript. Experienced with modern frameworks like React or Vue.js, and skilled in optimizing performance and ensuring cross-browser compatibility.</p>
                    <Carousel responsive={responsive} infinite ={true} className='skill-slider'>
                        <div className="item">
                            <img src={meter1} alt="LOADING"/>
                            <h5>Html5</h5>
                        </div>

                        <div className="item">
                            <img src={meter1} alt="LOADING"/>
                            <h5>Css</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="LOADING"/>
                            <h5>Javascript</h5>
                        </div>

                        <div className="item">
                            <img src={meter3} alt="LOADING"/>
                            <h5>Css Framework-Bootstrap & Tailwind css</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="LOADING"/>
                            <h5>React js</h5>
                        </div>

                        
                        <div className="item">
                            <img src={meter2} alt="LOADING"/>
                            <h5>Redux</h5>
                        </div>

                        <div className="item">
                            <img src={meter2} alt="LOADING"/>
                            <h5>MongoDb</h5>
                        </div>

                        <div className="item">
                            <img src={meter3} alt="LOADING"/>
                            <h5>Git & Github</h5>
                        </div>

                        
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorsharp}/>
    </section>
    </>
  )
}

export default Skills
