let num = randint(1, 20)
let chance = randint(1, 3)
while (true) {
    basic.showNumber(num)
    input.onButtonPressed(Button.A, function on_button_pressed_a(): number {
        
        num = num - 2
        return num
    })
    input.onButtonPressed(Button.B, function on_button_pressed_b(): number {
        
        num = num - 1
        return num
    })
    input.onButtonPressed(Button.AB, function on_button_pressed_ab(): number {
        
        
        if (chance == 1) {
            num = num - 10
            return num
        } else if (chance == 2) {
            num = num - 5
            return num
        } else {
            num = num + 1
            return num
        }
        
    })
    basic.clearScreen()
    if (num == 0) {
        basic.clearScreen()
        basic.showString("You win!")
        break
    }
    
    if (num < 0) {
        basic.clearScreen()
        basic.showString("You lose! :(")
    }
    
}
