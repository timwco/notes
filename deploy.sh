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

# Go To Public folder
cd public
# Add changes to git.
git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back
cd ..