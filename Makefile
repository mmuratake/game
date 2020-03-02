# This file is used by Linux (and sometimes Apple) systems
# to automatically compile certain source files from the command line.

.PHONY: all
all: GameApp.class

GameApp.jar: GameApp.class
	jar cf $@ *.class

GameApp.class: GameApp.java \
               Game.class \
               GameUi.class

Game.class: Game.java

GameUi.class: GameUi.java KeyboardController.class MouseController.class

KeyboardController.class: KeyboardController.java

MouseController.class: MouseController.java

%.class: %.java
	javac $<

.PHONY: clean
clean:
	$(RM) *.class GameApp.jar

.PHONY: docs
docs:
	test -d docs || mkdir docs
	cd docs && javadoc ../*.java
