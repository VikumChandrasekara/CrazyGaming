import { Navbar , Container , Nav } from "react-bootstrap"
import { useEffect, useState } from "react"
import logo from '../assets/img/crazy-gaming-logo.png'
import facbookLogo from '../assets/img/facebook.png'
import ytLogo from '../assets/img/youtube.png'
import tiktokLogo from '../assets/img/tiktok.png'
import 'animate.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled , setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return()=> window.removeEventListener("scroll" , onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home') }>HOME</Nav.Link>
                        <Nav.Link href="#streams" className={activeLink === 'streams' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('streams') }>STREAMS</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('about') }>ABOUT</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/CrazyGamingSLofficial"><img src={facbookLogo} alt=""/></a>
                            <a href="https://www.tiktok.com/@crazygaming_fb"><img src={tiktokLogo} alt=""/></a>
                            <a href="https://www.youtube.com/@crazygamingsl97"><img src={ytLogo} alt=""/></a>
                        </div>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact') }>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Get In Touch</span></button>
                        </Nav.Link>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}