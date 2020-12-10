import React from "react";

import './gauge.scss'

const gauge = (props) => {

  // 180 degrees
  const score = props.percent * 1.8

  // Default color is #1abc9c
  const color = (props.color ? props.color : '#1abc9c')
  
  return (
    <div class="box gauge--1">
    <div class="mask">
    	<div class="semi-circle" style={{background: color}}></div>
    	<div class="semi-circle--mask" style={{transform: `rotate(${score}deg)`}}></div>
    </div>
  </div>
  );
};

export default gauge
