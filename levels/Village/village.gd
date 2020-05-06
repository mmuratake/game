extends Node2D

func _ready():
	pass

func map_to_world(pos):
	return $Grass.map_to_world(pos)
