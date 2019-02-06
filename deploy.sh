#!/bin/bash

echo "\033[0;32mDeploying updates to GitHub...\033[0m"
echo "-------------------------------------------------------------"

# Deploy to GH Pages
# git subtree push --prefix public origin gh-pages
git push origin `git subtree split --prefix public`:gh-pages --force

echo "-------------------------------------------------------------"
echo "\033[0;32mDone. Thank You, Please Come Again\033[0m"
