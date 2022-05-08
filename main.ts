input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
basic.showIcon(IconNames.Happy)
