import React, { useState } from 'react';
import { Col, Row, Alert } from "react-bootstrap";
import 'animate.css';
import { dataref } from './firebase';

function Newsletter(){
  const [email,setEmail] = useState('')

  const handleAdd=() =>{
    dataref.ref("user").set({
      email: email
    }).catch(alert);
  }
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            </Col>
            <Col md={6} xl={7}>
              <form >
                <div className="new-email-bx">
                  <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter Email' required></input>
                  <button onClick={handleAdd} type="submit" >Subscribe</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}

export default Newsletter
