extends Node

func enter(host):
	host.animate_idle()

func input(host):
	if Input.is_action_pressed("game_left"):
		host.face_and_walk(Vector2(-1, 0))
	elif Input.is_action_pressed("game_right"):
		host.face_and_walk(Vector2(1, 0))
	elif Input.is_action_pressed("game_up"):
		host.face_and_walk(Vector2(0, -1))
	elif Input.is_action_pressed("game_down"):
		host.face_and_walk(Vector2(0, 1))
	elif Input.is_action_pressed("game_attack"):
		host.attack()
