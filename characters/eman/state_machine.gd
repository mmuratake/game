extends Node

onready var state_map = {
	"idle": $idle_state,
	"walk": $walk_state,
	"attack": $attack_state
}

var state_stack = []

func _ready():
	state_stack.push_back($idle_state)

func current_state():
	if state_stack.empty():
		return $idle_state
	else:
		return state_stack.back()

func enter_state(host):
	var s = current_state()
	if s.has_method("enter"):
		s.enter(host)

func exit_state(host):
	var s = current_state()
	if s.has_method("exit"):
		s.exit(host)

func push_state(host, name):

	var state = state_map[name]

	if state == current_state():
		return

	exit_state(host)
	state_stack.push_back(state)
	enter_state(host)

func pop_state(host):
	if state_stack.size() > 0:
		exit_state(host)
		state_stack.pop_back()
		enter_state(host)

func input(host):
	if current_state().has_method("input"):
		current_state().input(host)

func process(host, delta):
	if current_state().has_method("process"):
		current_state().process(host, delta)

func animation_finished(host):
	if current_state().has_method("animation_finished"):
		current_state().animation_finished(host)
