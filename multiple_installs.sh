#!/bin/bash

# Create a temporary directory for installs
mkdir temp_installs

# Run multiple npm installs
for i in {1..100}
do
  echo "Installation $i"
  mkdir temp_installs/install_$i
  cd temp_installs/install_$i
  npm init -y > /dev/null
  npm install react-smart-conditional
  cd ..
  echo "------------------------"
  
  # Clear npm cache to force download on the next run
  npm cache clean --force
done

# Check the installations
echo "Checking installations:"
find temp_installs -name "react-smart-conditional" | wc -l

# Clean up the temp directory
rm -rf temp_installs
