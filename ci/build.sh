#!/bin/bash

set -e
set -u

# Run standard build
gradle build
gradle javadoc

# Run TeaVM build
mvn package
