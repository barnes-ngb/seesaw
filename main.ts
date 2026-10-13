input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
})
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
