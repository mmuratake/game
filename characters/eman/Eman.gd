extends KinematicBody2D

var direction = Vector2(0, -1) setget set_direction, get_direction

func _ready():
	$AnimatedSprite.connect("animation_finished", self, "on_animation_finished")

func _process(delta):
	$state_machine.process(self, delta)

func _input(_event):
	$state_machine.input(self)

func animate_walk():
	if (direction.y > 0):
		$AnimatedSprite.play("Walk Down")
	elif (direction.y < 0):
		$AnimatedSprite.play("Walk Up")
	elif (direction.x > 0):
		$AnimatedSprite.play("Walk Right")
	else:
		$AnimatedSprite.play("Walk Left")

func get_direction():
	return direction

func set_direction(d):
	direction = d

func face_and_walk(dir):
	set_direction(dir)
	walk()

func push_state(name):
	$state_machine.push_state(self, name)

func pop_state():
	$state_machine.pop_state(self)

func walk():
	animate_walk()
	push_state("walk")

func attack():

	if (direction.y > 0):
		$AnimatedSprite.play("Attack Down")
	elif (direction.y < 0):
		$AnimatedSprite.play("Attack Up")
	elif (direction.x > 0):
		$AnimatedSprite.play("Attack Right")
	else:
		$AnimatedSprite.play("Attack Left")

	$state_machine.push_state(self, "attack")

func on_animation_finished():
	$state_machine.animation_finished(self)

func animate_idle():
	$AnimatedSprite.stop()

