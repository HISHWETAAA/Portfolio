import React, { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText] = useState('Send');
  
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ojdz7b', 'template_bdmabcc', formRef.current, 'dNNE2YDEEc-k8g5py')
      .then(
        () => {
          setSuccess(true);
         
        },
        () => {
          setError(true);
         
        }
      );
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={formRef} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    name='firstname'
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.lastName}
                    placeholder='Last Name'
                    name='lastname'
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    value={formDetails.email}
                    placeholder='E-mail'
                    name='email'
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    value={formDetails.phone}
                    placeholder='Phone No.'
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder='Message'
                    name='message'
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  />
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                  <br></br>
                  <br>
                  </br>
                  {error  && "Error"}
                  {success && "Success"}
                </Col>
                
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
