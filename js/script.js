// Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: April 2023
'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function myButtonClicked () {
  // input
  const radius = parseFloat(document.getElementById('radius').value)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'The Volume is: ' + volume.toFixed(2) + ' mm³'
}
