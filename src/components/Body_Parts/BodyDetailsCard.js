import React from 'react';

import '../../styles/BodyDetails.css';

const BodyDetailsCard = ({item}) => {
  // console.log(item.name);
  return (
    <div className='body-details-container'>
      <div className='body-details-card'>
        <div className='body-details-card-img'>
          <img src={item.imageUrl} />
        </div>
        <h2>Name of the organ: {item.name}</h2>
      </div>
    </div>
  );
};

export default BodyDetailsCard;
