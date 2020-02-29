# This file is used by Linux (and sometimes Apple) systems
# to automatically compile certain source files from the command line.

.PHONY: all
all: App.class

App.class: App.java

WallGeneratorApp.class: WallGeneratorApp.java WallGeneratorSettings.class

WallGeneratorSettings.class: WallGeneratorSettings.java

%.class: %.java
	javac $<

.PHONY: clean
clean:
	$(RM) *.class
