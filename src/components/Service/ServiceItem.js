import React from 'react';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="service-item padd-15">
      <div className="service-item-inner">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
