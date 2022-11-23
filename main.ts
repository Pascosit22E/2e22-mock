let odd_number = 0
input.onButtonPressed(Button.A, function () {
    odd_number = 1
    for (let index = 0; index < 20; index++) {
        basic.showNumber(odd_number)
        odd_number += 2
    }
})
input.onButtonPressed(Button.AB, function () {
    while (input.temperature() < 26) {
        basic.showString("Switch off Air Conditioner")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(20201134)
})
basic.forever(function () {
	
})
