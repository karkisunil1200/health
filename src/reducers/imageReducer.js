import {GET_IMAGES} from '../actions';

const initialState = {
  images: [
    {name: 'Brain', source: 'https://unsplash.com/photos/F4cJtI7HCMw'},
    {name: 'Heart', source: '../images/heart.jpg'},
    {name: 'Liver', source: '../images/liver.jpg'},
    {name: 'Stomach', source: '../images/stomach.jpg'},
    {name: 'Skin', source: '../images/skin.jpg'},
    {name: 'Instestine', source: '../images/instestine.jpg'}
  ]
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state
      };
    default:
      return state;
  }
};
