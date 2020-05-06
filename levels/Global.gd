extends Node

var current_scene = null

func _ready():
	var root = get_tree().get_root()
	current_scene = root.get_child(root.get_child_count() - 1)

func goto_scene(path, pos):
	call_deferred("_deferred_goto_scene", path, pos)

func _deferred_goto_scene(path, pos):
	current_scene.free()
	var s = ResourceLoader.load(path)
	current_scene = s.instance()
	get_tree().get_root().add_child(current_scene)
	get_tree().set_current_scene(current_scene)

	$Eman.set_position(current_scene.map_to_world(pos))
