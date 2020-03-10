#!/bin/bash

sources=$(ls *.java)

classes=

for f in $sources; do
  classes="$classes $(basename $f .java).class"
done

echo ".PHONY: all"
echo "all: $classes"
echo ""

for f in *.java; do
  echo $(basename $f .java).class: $f
  echo -e "\tjavac $f"
  echo ""
done

echo ".PHONY: clean"
echo "clean:"
echo -e "\trm *.class"
