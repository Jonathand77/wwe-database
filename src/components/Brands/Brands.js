import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TrophyFill } from 'react-bootstrap-icons';
import { defaultCarouselResponsive } from '../../data/carouselConfig';
import { brands } from '../../data/BrandData/brandsData';
import './Brands.css';

export const Brands = () => {
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
                responsive={defaultCarouselResponsive}
                infinite
                className="owl-carousel owl-theme brands-slider"
              >
                {brands.map((brand) => (
                  <div key={brand.id} className="brands-item">
                    <img src={brand.image} alt={brand.alt} />
                    <h5>{brand.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
