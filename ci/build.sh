#!/bin/bash

set -e
set -u

exit 0

# Run standard build
gradle build
gradle javadoc

# Run TeaVM build
mvn --quiet package
