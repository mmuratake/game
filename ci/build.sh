#!/bin/bash

set -e
set -u

gradle build
gradle javadoc
