/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Oct 2023
 * This program detects distance with sonar.
*/

// variables
let distance: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Duck)

// find distance
input.onButtonPressed(Button.A, function() {
  basic.clearScreen()
  distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)
  basic.showNumber(distance)
  basic.showIcon(IconNames.StickFigure)
})
