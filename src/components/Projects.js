import React from 'react'
import { Container, Row,Col, Tab,Nav } from 'react-bootstrap';

import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

import ProjectCard from './ProjectCard';
const Projects = () => {
    const projects=[
        {
       title:"Bussiness Startup" ,
       description:"Design & Development",
       imgUrl: projImg1,
        },
        {
        title:"Bussiness Startup" ,
        description:"Design & Development",
        imgUrl: projImg2,
        },
        {
        title:"Bussiness Startup" ,
        description:"Design & Development",
        imgUrl: projImg3,
        },
        {
        title:"Bussiness Startup" ,
        description:"Design & Development",
        imgUrl: projImg1,
        },
        {
        title:"Bussiness Startup" ,
        description:"Design & Development",
        imgUrl: projImg2,
        },
        {
        title:"Bussiness Startup" ,
        description:"Design & Development",
        imgUrl: projImg3    ,
        },
                 
    ];
  return (
    <>
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Discover my frontend development projects, each designed to highlight my expertise in creating responsive, user-centric web interfaces. From dynamic applications to polished websites, these examples showcase my proficiency with modern technologies and design principles.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills"  className='nav-pills mb-5 justify-content align-items-center' id="pills-tab">
                         <Nav.Item>
                           <Nav.Link eventKey="first">Projects</Nav.Link>
                         </Nav.Item>
                        
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                       <Row>
                         {
                            projects.map((project,index)=>{
                                return(
                                   <ProjectCard
                                   key={index}
                                   {...project}
                                   />
                                )
                            })
                         }
                       </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       Lorem Ipsum
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    Lorem Ipsum
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
            
        </Container>
       

    </section>
    </>
  )
}

export default Projects
