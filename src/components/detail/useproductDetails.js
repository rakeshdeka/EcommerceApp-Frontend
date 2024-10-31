import React from 'react';
import { product } from './constant';

export function useproductDetails() {
  const fetchProductById = id => {
    return product;
  };
  return { fetchProductById };
}
