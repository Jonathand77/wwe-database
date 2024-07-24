import meter1 from "../assets/img/EventRR.png";
import meter2 from "../assets/img/EventEC.png";
import meter3 from "../assets/img/EventWM.png";
import meter4 from "../assets/img/EventBK.png";
import meter5 from "../assets/img/EventKOTR.png";
import meter6 from "../assets/img/EventCATC.png";
import meter7 from "../assets/img/EventMITB.png";
import meter8 from "../assets/img/EventSS.png";
import meter9 from "../assets/img/EventBIB.png";
import meter10 from "../assets/img/EventBB.png";
import meter11 from "../assets/img/EventCJ.png";
import meter12 from "../assets/img/EventSSWG.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/Banner2.jpg"

export const SkillsEvents = () => {
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
    <section className="skills" id="skillsEvent">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Premium Live Events</h2>
                        <p>WWE Premium Live Events (PLE) are the pinnacle of sports entertainment, offering unforgettable shows that combine intense action, dramatic stories and world-class production. These events are cornerstones of the WWE calendar for fans around the world with their unique blend of excitement and spectacle.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>ROYAL RUMBLE</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>ELIMINATION CHAMBER</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>WRESTLEMANIA</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>BACKLASH</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>KING AND QUEEN OF THE RING</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>CLASH AT THE CASTLE</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>MONEY IN THE BANK</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>SUMMER SLAM</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>BASH IN BERLIN</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>BAD BLOOD</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>CROWN JEWEL</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>SURVIVOR SERIES</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}