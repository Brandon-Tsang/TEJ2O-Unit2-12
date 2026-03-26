/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Mar 2026
 * This program ...
*/

// variables
let distanceNumber: number = -1
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// lights of the neopixel
input.onButtonPressed(Button.A, function () {
    // get distance to object
    distanceNumber = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showString(distanceNumber.toString())
    if (distanceNumber < 10) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    } else {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    }

    neopixelStrip.show()
})

