import React from 'react';
import MainMediaSlider from './mainMediaSlider';

function ItemMediaCard({ item }) {
  return (
    <>
      {item?.images && item?.images.length > 0 ? (
        <MainMediaSlider items={item?.images} />
      ) : (
        <img src={item?.thumb_image} style={{ height: '100%' }} />
      )}
    </>
  );
}

export default ItemMediaCard;
