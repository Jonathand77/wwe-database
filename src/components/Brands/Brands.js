import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TrophyFill } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { defaultCarouselResponsive, brands, hasBrandDetail } from '../../data';
import './Brands.css';

export const Brands = ({ onSelectBrand }) => {
  const handleBrandClick = (brandId) => {
    if (hasBrandDetail(brandId) && onSelectBrand) {
      onSelectBrand(brandId);
    }
  };

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={`brands-box ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
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
                      <button
                        key={brand.id}
                        type="button"
                        className={`brands-item ${hasBrandDetail(brand.id) ? 'brands-item--active' : 'brands-item--disabled'}`}
                        onClick={() => handleBrandClick(brand.id)}
                        disabled={!hasBrandDetail(brand.id)}
                        aria-label={`Open ${brand.name} details`}
                      >
                        <img src={brand.image} alt={brand.alt} />
                        <h5>{brand.name}</h5>
                      </button>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
