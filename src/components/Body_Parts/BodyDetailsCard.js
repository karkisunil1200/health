import React, {useState} from 'react';
import {connect} from 'react-redux';

import {imageData} from '../../images/index';
import '../../styles/BodyDetails.css';

const BodyDetailsCard = ({item}) => {
  // console.log(item.name);

  const getFood = id => {
    const foods = imageData.map(item => item.id === id);
    console.log(foods);
    return foods.map(food => <h2>food.name</h2>);
  };

  return (
    <>
      <div className='body-details-container'>
        <div className='body-details-card'>
          <div className='body-details-card-img'>
            <img src={item.imageUrl} />
          </div>
          <h2> {item.name}</h2>
        </div>
        <div className='body-description'>
          <h5>{item.description}</h5>
          <button onClick={() => getFood(item.id)}>Foods</button>
          <button>Exerices</button>
        </div>
      </div>
    </>
  );
};

export default BodyDetailsCard;
