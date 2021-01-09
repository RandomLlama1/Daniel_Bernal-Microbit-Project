num = randint(1,20)
 
def on_button_pressed_a():
    global num
    num = num-2
    basic.show_number(num)
    return num
 
def on_button_pressed_b():
    global num
    num = num-1
    basic.show_number(num)
    return num 

def victory():
    if num == 0:
        basic.show_string("You win!")
        basic.show_icon(IconNames.HEART)
    if num < 0:
        basic.show_string("You lose :(")
if input.is_gesture(Gesture.Shake):
    basic.show_number(num)
'''
def on_forever():
    if num == 0:
        break
    elif num > 0:
        break
basic.forever(on_forever)
'''
input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)
 


