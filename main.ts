let num = randint(1, 20)
/** 
while input.on_gesture(Gesture.Shake):
    basic.show_number(num)

 */
if (input.isGesture(Gesture.Shake)) {
    basic.showNumber(num)
}

basic.forever(function on_forever() {
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a(): number {
    let num = num - 2
    basic.showNumber(num)
    return num
})
input.onButtonPressed(Button.B, function on_button_pressed_b(): number {
    let num = num - 1
    basic.showNumber(num)
    return num
})
