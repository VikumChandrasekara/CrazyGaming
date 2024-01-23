
import {Container, Col, Row } from 'react-bootstrap'
import TPRamanayeka from '../assets/img/TPRamanayake.jpg'
import facbookLogo from '../assets/img/facebook.png'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import linkdinLogo from '../assets/img/linkdinLogo.png'
import instergramLogo from '../assets/img/instergramLogo.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
    return(
        <section className='about' id='about'>
            <Container>
            <Row>
            <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>WHO AM I 👀</h2>
                <div className="social-icon2">
                    <a href="https://lk.linkedin.com/in/tanuj-ramanayake-703393225"><img src={linkdinLogo} alt=""/></a>
                    <a href="https://www.facebook.com/TanujRamanayake"><img src={facbookLogo} alt=""/></a>
                    <a href="https://www.instagram.com/tanuj_ramanayake/"><img src={instergramLogo} alt=""/></a>
                </div>
                <p className='slink'>Personal Social Links ☝️</p>
                <Tab.Container id="abouts-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content align-item-center' id='pills-tab'>
                            <Nav.Item>
                            <Nav.Link eventKey="first">About Me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">PC Specs</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Col  xs={12} md={16} xl={0}>
                            <p>Hello, I'm Tanuj Pesara Ramanayake, residing in Matale, Sri Lanka. I pursued my education at ST. Thomas' College, Matale, and later joined Horizon Campus, where I graduated as a Network Engineer with a specialization in Network Engineering (Bit). Passionate about sharing my interests and knowledge, I began a live stream in November 2021.
                            Beyond my academic pursuits, I am also an avid cricketer, finding joy in playing the sport. This combination of technical expertise and a love for cricket shapes my diverse interests and experiences.🎮🌍</p>   
                            <img className='my' src={TPRamanayeka} alt="about me" />
                        </Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Col xs={12} md={16} xl={0}>
                            <p>🔻Processor: i5 - 11400F</p>
                            <p>🔻Ram: T-Force Night hawk 16GB</p>
                            <p>🔻GPU - Geforce  GTX 1650 super 4Gb </p>
                            <p>🔻Mother Board: MSI H510-A Pro</p>
                            <p>🔻HDD: 1TB </p>
                            <p>🔻SSD: Lexar 240Gb M.2</p>
                            <p>🔶Internet Provider: SLT Fiber</p>
                        </Col>
                    </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                        </div>}
                    </TrackVisibility>
                </Col>
            </Row>
            </Container>
        </section>
    )
}
