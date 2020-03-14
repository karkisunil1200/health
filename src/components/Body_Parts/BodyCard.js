import React from 'react';
import {Link} from 'react-router-dom';

const BodyCard = ({item}) => {
  const id = item.id;
  // console.log('This is the id', id);
  return (
    <div>
      <div className='pic-header'>
        <img src={item.imageUrl} />
        <div className='name'>
          <Link to={`/bodylist/${id}`}>
            <h4>{item.name}</h4>
          </Link>
        </div>
      </div>

      <div className='pic-describtion'>
        <p>{item.describtion}</p>
      </div>
    </div>
  );
};

export default BodyCard;
