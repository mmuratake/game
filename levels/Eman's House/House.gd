extends Node2D

# Called when the node enters the scene tree for the first time.
func _ready():
	pass

func map_to_world(pos):
	return $layer_1.map_to_world(pos)

func leave_house(body):
	# Ensure this is Eman crossing the area.
	if body.get_name() != "Eman":
		return
	# Switch to Village scene.
	var state = get_node("/root/global/State")
	state.change_scene("res://levels/Village/village.tscn", Vector2(5, 1))
