// Use hooks for useState
import React, { useState } from 'react';
import Body from './Body';
import Wheel from './Wheel';

const Car = () => {
  // Car state represents the color of the car
  // _setColor isn't used but is an example of a state setter
  const [color, _setColor] = useState("blue");

  return (
  <>
  //These are props
    <Wheel wheelPositionLeft="90px" wheelPositionTop="100px" />
    <Wheel wheelPositionLeft="90px" wheelPositionTop="300px" />
    <Body color={color} />
    <Wheel wheelPositionLeft="360px" wheelPositionTop="100px" />
    <Wheel wheelPositionLeft="360px" wheelPositionTop="300px" />
  </>
  )
};

export default Car;
