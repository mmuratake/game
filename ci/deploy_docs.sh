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

src_dir=$PWD/build/docs/javadoc
git_dir=$(mktemp -d)
dst_dir=$git_dir/game/javadoc
git_url="https://${GH_TOKEN}@github.com/tay10r/game"

# Clone a copy of the project, checking out the 'gh-pages' branch.
git clone $git_url $dst_dir/game -b gh-pages

# Remove old docs
rm -Rf $dst_dir/*

# Copy over the newly generated documentation
rsync --info=progress2 -r $src_dir $dst_dir

# Setup Travis CI credentials
git -C $git_dir config --global user.email "travis@travis-ci.org"
git -C $git_dir config --global user.name "travis-ci"

# Stage the changes
git -C $git_dir add javadoc

# Commit the changes
git -C $git_dir commit -m "Latest documentation from Travis build $TRAVIS_BUILD_NUMBER"

# And boom!
git -C $git_dir push $git_url gh-pages
