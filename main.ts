input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("buffalo")
})
input.onButtonPressed(Button.B, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    if (randint(1, 6) == 1) {
    	
    } else if (randint(1, 6) == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (randint(1, 6) == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (randint(1, 6) == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (randint(1, 6) == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("elaphant")
})
