global num = randint(1,20)
 
def on_button_pressed_a():
    num = num-2
    basic.show_number(num)
    return num
 
def on_button_pressed_b():
    num = num-1
    basic.show_number(num)
    return num 

if input.is_gesture(Gesture.Shake):
    basic.show_number(num)

def on_forever():
    input.on_button_pressed(Button.A, on_button_pressed_a)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    if num == 0:
        break
    elif num > 0:
        break
basic.forever(on_forever)
 

 
 
 
 


