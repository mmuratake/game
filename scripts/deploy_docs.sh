#!/bin/bash

set -e

test -d docs || mkdir docs

cd docs

javadoc ../*.java


