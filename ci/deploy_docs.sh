#!/bin/bash

set -e
set -u

if [ "$TRAVIS_REPO_SLUG" != "tay10r/game" ]; then
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

src_dir=$PWD
out_dir=$(mktemp -d)

# Create a standing area in docs
test -d $out_dir || mkdir $out_dir

# Build documentation in docs/ directory
cd $out_dir
javadoc $src_dir/*.java
cd $src_dir

# Go to the branch where the documentation is at.
git checkout gh-pages

# Remove old docs
rm -Rf docs

# Add new docs
cp -R $out_dir docs

# Setup Travis CI credentials
git config --global user.email "travis@travis-ci.org"
git config --global user.name "travis-ci"

# Stage the changes
git add docs

# Commit the changes
git commit -m "Latest documentation from Travis build $TRAVIS_BUILD_NUMBER"

# And boom!
git push -f https://${GH_TOKEN}@github.com/tay10r/game gh-pages
