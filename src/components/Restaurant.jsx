import React from 'react'
import { useParams } from 'react-router';

const Restaurant = () => {

    const {resId} = useParams();     // call an Api of the particular restaurant information

  return (
    <div>Restaurant {resId}</div>
  )
}

export default Restaurant