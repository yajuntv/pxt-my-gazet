let noise = 0
OLED.init(128, 64)
pins.digitalWritePin(DigitalPin.P15, 0)
basic.forever(function () {
    OLED.clear()
    noise = Environment.ReadNoise(AnalogPin.P1)
    OLED.writeString("noise meter")
    OLED.newLine()
    OLED.writeString("noise: ")
    OLED.writeNum(noise)
    if (60 < noise) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P15, 1)
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P15, 0)
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
})
