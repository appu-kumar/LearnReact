import React from 'react'
import { useParams } from 'react-router';

const Restaurant = () => {

    const {resId} = useParams();     // call an Api of the particular restaurant information  , optimized way right this api in custom hook(single responsibility principle)

  return (
    <div>Restaurant {resId}</div>
  )
}

export default Restaurant