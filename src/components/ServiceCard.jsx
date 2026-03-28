import { Link } from 'react-router-dom';
import './ServiceCard.css';

export function ServiceCard({ title, description, link, icon }) {
  return (
    <Link to={link} className="service-card">
      <div className="service-card-content">
        {icon && <div className="service-icon">{icon}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="service-link-arrow">→</span>
      </div>
    </Link>
  );
}
