#!/bin/bash

if [ "$TRAVIS_REPO_SLUG" != "tay10r/tile_utilities" ]; then
  echo "Skipping documentation, invalid repo slug"
  exit 0
fi

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "Skipping documentation, commit is pull request"
  exit 0
fi

if [ "$TRAVIS_BRANCH" != "master" ]; then
  echo "Skipping documentation, branch is not 'master'"
  exit 0
fi

javadoc *.java

git checkout gh-pages

git config --global user.email "travis@travis-ci.org"
git config --global user.name "travis-ci"

git add .

git commit -m "Latest documentation from Travis build $TRAVIS_BUILD_NUMBER"

git push -f https://${GH_TOKEN}@github.com/tay10r/tile_utilities gh-pages
