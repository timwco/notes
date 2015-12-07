#!/bin/bash

echo -e "\033[0;32mCleaning public directory...\033[0m"

# Clean up public directory
cd public
find . ! -name '.git' -type f -exec rm -f {} +
find . ! -name '.git' -type d -exec rm -rf {} +
cd ..