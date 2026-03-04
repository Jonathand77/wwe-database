import { Col } from 'react-bootstrap';
import './ProjectCard.css';

export const ProjectCard = ({ title, description, imgUrl, variant = 'champions' }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={`proj-imgbx proj-imgbx--${variant}`}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

