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

tmp_dir=$(mktemp -d)

git_url="https://${GH_TOKEN}@github.com/tay10r/game"
git_dir=$tmp_dir/game

doc_src_dir=$PWD/build/docs/javadoc
doc_dst_dir=$git_dir/javadoc

dist_src_dir=$PWD/build/distributions
dist_dst_dir=$git_dir/distributions

# Clone a copy of the project, checking out the 'gh-pages' branch.
git clone $git_url $git_dir

# Checkout the GitHub pages branch
git -C $git_dir checkout gh-pages

# Remove old docs
rm -Rf $doc_dst_dir/*

# Copy over the newly generated documentation
rsync --info=progress2 -r $doc_src_dir $doc_dst_dir

# Copy over the newly generated releases
rsync --info=progress2 -r $dist_src_dir $dist_dst_dir

# Setup Travis CI credentials
git -C $git_dir config --global user.email "travis@travis-ci.org"
git -C $git_dir config --global user.name "travis-ci"

# Stage the documentation changes
git -C $git_dir add javadoc

# Commit the documentation changes
git -C $git_dir commit -m "Latest documentation from Travis build $TRAVIS_BUILD_NUMBER"

# Stage the new distributions
git -C $git_dir add distributions

# Commit the new distributions
git -C $git_dir commit -m "Latest distributions from Travis build $TRAVIS_BUILD_NUMBER"

# And boom!
git -C $git_dir push $git_url gh-pages
