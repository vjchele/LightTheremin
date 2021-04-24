/**
 * light levels are in the range of 0 to 255
 * 
 * 0 is dark
 * 
 * 255 very bright
 * 
 * 1. Night lamp
 * 
 * 2. Controlling brightness, sound etc.,
 * 
 * 3. Theremin
 * 
 * 3a. Set tempo light level 
 * 
 * 4. Sound brightness
 * 
 * 5. When P0 is pressed
 * 
 * 6. Temperature Celsius to Fahrenheit
 * 
 * 7.
 */
basic.forever(function () {
    basic.showString("THEREMIN")
    music.setTempo(input.lightLevel() * 24)
})
