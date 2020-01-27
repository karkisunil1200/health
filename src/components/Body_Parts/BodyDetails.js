import React, {useState} from 'react';

import BodyDetailsCard from './BodyDetailsCard';
import {imageData} from '../../images';

const BodyDetails = props => {
  const [state, setState] = useState(imageData);
  //
  const id = props.match.params.id;

  console.log('this is the id ', id);
  // const response = {state.filter( (item) => item.id === id )}

  return (
    <div>
      {state.map(item => {
        // console.log('This is the item id  ', `${item.id}`);
        return `${item.id}` === id ? <BodyDetailsCard key={item.id} item={item} /> : null;
      })}
    </div>
  );
};

export default BodyDetails;
