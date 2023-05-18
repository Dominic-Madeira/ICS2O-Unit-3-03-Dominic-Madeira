// Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: April 2023
'use strict'
/**
 * This function calculates the volume of a sphere
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-03-Dominic-Madeira/sw.js", {
    scope: "/ICS2O-Unit-3-03-Dominic-Madeira/",
  })
}


function myButtonClicked () {
  // input
  const radius = parseFloat(document.getElementById('radius').value)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'The Volume is: ' + volume.toFixed(2) + ' mm³'
}
