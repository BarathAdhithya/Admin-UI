import React from 'react';
import { Link } from 'react-router-dom';

export function NavItem(props) {
  let iconStyle = {
    backgroundImage: `url(${props.imgData.img.src})`,
  };
  let isActive = props.imgData.isActive ? 'active' : '';
  let widget = props.imgData.widget.src !== '' ? (
    <img src={props.imgData.widget.src} alt={props.imgData.widget.alt} />
  ) : (
    ''
  );
  return (
    <li className={`nav-item--wrap ${isActive}`}>
      <Link to={props.imgData.pageLink}>
        <div className="nav-item">
          <div className="nav-item__img-wrap">
            <span className="nav-item__img" style={iconStyle}></span>
          </div>
          <div className="nav-item__name">{props.imgData.name}</div>
          <span className="nav-item__widget">{widget}</span>
        </div>
      </Link>
    </li>
  );
}

export default NavItem;
