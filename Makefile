# This file is used by Linux (and sometimes Apple) systems
# to automatically compile certain source files from the command line.

.PHONY: all
all: GameApp.class

GameApp.jar: GameApp.class
	jar cf $@ *.class

GameApp.class: GameApp.java \
               Game.class \
               GameUi.class \
               TileSet.class \
               TileSetReader.class

Game.class: Game.java

GameUi.class: GameUi.java \
              Game.class \
              GameView.class \
              KeyboardController.class \
              MouseController.class

GameRenderer.class: GameRenderer.java Game.java

GameView.class: GameView.java GameRenderer.class

KeyboardController.class: KeyboardController.java Game.class

MouseController.class: MouseController.java Game.class

%.class: %.java
	javac $<

.PHONY: clean
clean:
	$(RM) *.class GameApp.jar

.PHONY: docs
docs:
	test -d docs || mkdir docs
	cd docs && javadoc ../*.java
