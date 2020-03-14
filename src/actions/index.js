import React from 'react';

export const GET_IMAGES = 'GET_IMAGES';
export const GET_FOODS = 'GET_FOODS';

export const getImages = () => {
  return {
    type: GET_IMAGES
  };
};

export const getFoods = () => {
  return {
    type: GET_FOODS
  };
};
