import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TrophyFill } from 'react-bootstrap-icons';
import meter1 from '../../assets/img/BrandRaw.png';
import meter2 from '../../assets/img/BrandSM.png';
import meter3 from '../../assets/img/BrandNXT.png';
import './Brands.css';

export const Brands = () => {
  const brandsResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="brands-box wow zoomIn">
              <h2 className="section-title">
                <TrophyFill /> Brands
              </h2>
              <p>
                WWE is the global leader in sports entertainment, offering three iconic brands that
                combine fast-paced action, captivating stories and high-quality production. Each WWE
                brand has its own unique style and charm, providing fans with a variety of exciting,
                adrenaline-filled content.
              </p>
              <Carousel
                responsive={brandsResponsive}
                infinite
                className="owl-carousel owl-theme brands-slider"
              >
                <div className="brands-item">
                  <img src={meter1} alt="RAW brand logo" />
                  <h5>RAW</h5>
                </div>
                <div className="brands-item">
                  <img src={meter2} alt="SmackDown brand logo" />
                  <h5>SMACKDOWN</h5>
                </div>
                <div className="brands-item">
                  <img src={meter3} alt="NXT brand logo" />
                  <h5>NXT</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
