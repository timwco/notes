#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Clean up public directory
cd public
find . ! -name '.git' -type f -exec rm -f {} +
find . ! -name '.git' -type d -exec rm -rf {} +
cd ..

# Run the basic static file build tool
gulp

# Build the project.
hugo

# Deploy to GH Pages
git subtree push --prefix app origin gh-pages

echo -e "\033[0;32mDone. Thank You, Please Come Again\033[0m"