#!/bin/bash

set -e
set -u

# Compile sources
make

# The code below is for when the game
# gets a web interface with TeaVM
exit 0

test -d build || mkdir build

cd build

mvn -B \
  -DarchetypeCatalog=local \
  -DarchetypeGroupId=org.teavm \
  -DarchetypeArtifactId=teavm-maven-webapp \
  -DarchetypeVersion=0.6.1 archetype:generate \
  -DgroupId=tile_utilities \
  -DartifactId=tile_utilities
