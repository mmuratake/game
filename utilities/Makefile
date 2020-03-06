# This file is used by Linux (and sometimes Apple) systems
# to automatically compile certain source files from the command line.

.PHONY: all
all: TileSetImporterApp.class WallGeneratorApp.class

Polygon2D.class: Polygon2D.java Vector2D.class

TileSetImporterApp.class: TileSetImporterApp.java TileSet.class TileSetReader.class TileSetWriter.class

Tile.class: Tile.java Polygon2D.class Vector2D.class

TileSet.class: TileSet.java Tile.class

TileSetReader.class: TileSetReader.java Polygon2D.class TileSet.class Tile.class Vector2D.class

TileSetWriter.class: TileSetWriter.java Polygon2D.class TileSet.class Tile.class Vector2D.class

Vector2D.class: Vector2D.java

WallGeneratorApp.jar: WallGeneratorApp.class
	jar cf $@ *.class

WallGeneratorApp.class: WallGeneratorApp.java WallGeneratorView.class

WallGenerator.class: WallGenerator.java

WallGeneratorView.class: WallGeneratorView.java \
                         WallGenerator.class \
                         WallGeneratorPreviewGrid.class \
                         WallGeneratorSettings.class \
                         WallGeneratorSettingsObserver.class

WallGeneratorPreviewGrid.class: WallGeneratorPreviewGrid.java

WallGeneratorSettings.class: WallGeneratorSettings.java \
                             WallGeneratorSettingsObserver.class

%.class: %.java
	javac $<

.PHONY: clean
clean:
	$(RM) *.class *.jar
