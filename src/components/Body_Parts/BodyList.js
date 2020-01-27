import React, {useState, useEffect} from 'react';

import {imageData} from '../../images';
import '../../styles/BodyList.css';
import BodyCard from './BodyCard';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';

const BodyList = props => {
  const [state, setState] = useState(imageData);

  return (
    <div className='body-list-container'>
      <h4 className='title'>Organs </h4>
      <div className='image-list'>
        {state.map(item => {
          // console.log('This is from bodylist: ', item);
          return <BodyCard key={item.imageUrl} item={item} />;
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
