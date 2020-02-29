#!/bin/bash

test -d build || mkdir build

cd build

mvn -B \
  -DarchetypeCatalog=local \
  -DarchetypeGroupId=org.teavm \
  -DarchetypeArtifactId=teavm-maven-webapp \
  -DarchetypeVersion=0.6.1 archetype:generate \
  -DgroupId=tile_utilities \
  -DartifactId=tile_utilities
