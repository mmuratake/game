extends Node

# The current scene that the player is at.
var current_scene = "res://levels/Eman's House/house.tscn"

# Called when the node enters the scene tree for the first time.
func _ready():
	change_scene(current_scene, Vector2(4, 2))

func change_scene(scene, pos):
	get_node("/root/global").goto_scene(scene, pos)
