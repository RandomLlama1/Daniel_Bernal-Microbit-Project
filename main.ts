let num = randint(1, 20)
function victory() {
    if (num == 0) {
        basic.showString("You win!")
        basic.showIcon(IconNames.Heart)
    }
    
    if (num < 0) {
        basic.showString("You lose :(")
    }
    
}

if (input.isGesture(Gesture.Shake)) {
    basic.showNumber(num)
}

/** 
def on_forever():
    if num == 0:
        break
    elif num > 0:
        break
basic.forever(on_forever)

 */
input.onButtonPressed(Button.A, function on_button_pressed_a(): number {
    
    num = num - 2
    basic.showNumber(num)
    return num
})
input.onButtonPressed(Button.B, function on_button_pressed_b(): number {
    
    num = num - 1
    basic.showNumber(num)
    return num
})
