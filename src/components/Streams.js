import { Container, Row ,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import live1 from "../assets/img/L1.PNG"
import live2 from "../assets/img/L2.PNG"
import live3 from "../assets/img/L3.PNG"
import live4 from "../assets/img/L4.PNG"
import live5 from "../assets/img/L5.PNG"
import 'animate.css';

export const Streams = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      return(
        <section className="stream" id="streams">
            <Container>
                <Row>
                    <Col>
                        <div className="stream-bx">
                            <h2>
                                STREAMS 🕹️
                            </h2>
                            <p>
                                🎮 Join the heart-pounding world of [CrazyGaming] for an adrenaline-fueled Call of Duty: Mobile experience! 🚀 Witness epic missions, insane snipes, and strategic victories in a rollercoaster of emotions. 🎯 Whether you're a seasoned gamer or a casual viewer, expect a wild ride filled with intense moments 
                                and unfiltered gaming passion. 🌐 Dive into virtual battlegrounds with a passionate community, from tactical plays to unexpected twists. Smash that follow button, turn on notifications, and be part of the action! 🚨 Get ready for a gaming lifestyle featuring epic wins and hilarious fails. It's not just gaming; it's a thrilling journey! 🚀🎉</p>
                            <p>Watch some streams I have done.</p>
                            <Carousel responsive={responsive} infinite = {true} className="streams-slider">
                                <div onClick={() => window.open('https://www.facebook.com/100055296235944/videos/601349748873121', '_blank')} className="item" >
                                    <img src={live1} alt="Image" className="sImage"/>
                                    <h5 className="cc">☞ Rush game play ☜</h5>   
                                <div class="overlay">
                                    <div class="sText">Click to Watch</div>
                                </div>    
                                </div>
                                <div onClick={() => window.open('https://www.facebook.com/100055296235944/videos/998452408046884', '_blank')} className="item" >
                                    <img src={live2} alt="Image" className="sImage"/>
                                    <h5 className="cc">☞ Rank up 😍🔥 ☜</h5>   
                                <div class="overlay">
                                    <div class="sText">Click to Watch</div>
                                </div>    
                                </div>
                                <div onClick={() => window.open('https://www.facebook.com/100055296235944/videos/1254061901967513', '_blank')} className="item" >
                                    <img src={live3} alt="Image" className="sImage"/>
                                    <h5 className="cc">☞ Call of Duty: Mobile ☜</h5>   
                                <div class="overlay">
                                    <div class="sText">Click to Watch</div>
                                </div>    
                                </div>
                                <div onClick={() => window.open('https://www.facebook.com/100055296235944/videos/998452408046884', '_blank')} className="item" >
                                    <img src={live4} alt="Image" className="sImage"/>
                                    <h5 className="cc">☞ Alcatraz Room 😍🔥 ☜</h5>   
                                <div class="overlay">
                                    <div class="sText">Click to Watch</div>
                                </div>    
                                </div>
                                <div onClick={() => window.open('https://www.facebook.com/100055296235944/videos/206249385710731', '_blank')} className="item" >
                                    <img src={live5} alt="Image" className="sImage"/>
                                    <h5 className="cc">☞ Morning game play ☜</h5>   
                                <div class="overlay">
                                    <div class="sText">Click to Watch</div>
                                </div>    
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}