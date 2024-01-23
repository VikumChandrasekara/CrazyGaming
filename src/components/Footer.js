import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/crazy-gaming-logo.png'
import facbookLogo from '../assets/img/facebook.png'
import whatsappLogo from '../assets/img/whatsappLogo.png'
import linkdinLogo from '../assets/img/linkdinLogo.png'
import 'animate.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>© Crazy Gaming 2024. Web Solutions by <a href="https://thrimaa.com/" target="_blank">Thrimaa Interactive Pvt. Ltd</a></p>
            <h2>Choose Thrimaa Interactive as your Software Solution Partner</h2>
            <span>
              <p>Connect With Our Team:</p>
              <div className="social-icon3">
                  <a href="https://www.linkedin.com/company/thrimaa-interactive/"><img src={linkdinLogo} alt=""/></a>
                  <a href="https://www.facebook.com/thrimaainteractive"><img src={facbookLogo} alt=""/></a>
                  <a href="https://wa.me/message/BCU2K3L2JDRAD1"><img src={whatsappLogo} alt=""/></a>
              </div>
              <p><br></br>Hotline: +94 71 232 7321<br></br>Email: admin@thrimaa.com<br></br>Website: www.thrimaa.com</p>
          </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}