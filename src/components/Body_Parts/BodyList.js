import React, {useState, useEffect} from 'react';

import {imageData} from '../../images';

const BodyList = props => {
  const [state, setState] = useState(imageData);

  return (
    <div className='body-list-container'>
      <h4>List of organs: </h4>
      <div className='image-list'>
        {state.map(item => {
          return (
            <div className='card'>
              <img src={item.imageUrl} />
              <h5>Name: {item.name} </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

export default BodyList;

//Photo by Robina Weermeijer on Unsplash ----kidney----
//Photo by Robina Weermeijer on Unsplash----Heart-----
//Photo by Coline Haslé on Unsplash---Skin----
//Photo by Robina Weermeijer on Unsplash--Lungs
//Photo by =Elionas2 on Pixabay--liver
////Photo by BILL  OXFORD on Unsplash--Stomach
//Photo by Natasha Connell on Unsplash
