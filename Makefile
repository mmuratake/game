# This file is used by Linux (and sometimes Apple) systems
# to automatically compile certain source files from the command line.

.PHONY: all
all: WallGeneratorApp.class

%.class: %.java
	javac $<
