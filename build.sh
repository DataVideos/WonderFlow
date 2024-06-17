#!/bin/zsh

target_path=$1
if [ -z "$target_path" ]; then
  echo "Please provide the target path"
  exit 1
fi

abs_path=$(realpath "$target_path")

echo "Are you sure to build to $abs_path? (y/n)"
read -r confirm
if [ "$confirm" != "y" ]; then
  echo "Cancelled"
  exit 1
fi

npm run build

# rm other files except .git in target path
rm -rf $(ls "$abs_path" | grep -v .git)

cp -r dist/* "$abs_path"

# create a .gitignore file with a given content
ignore=".DS_Store\n.idea"
echo "$ignore" > "$abs_path/.gitignore"

# create a .gitattributes file with a given content
attributes="data/**/*.zip filter=lfs diff=lfs merge=lfs -text\ndata/**/*.mp4 filter=lfs diff=lfs merge=lfs -text"
echo "$attributes" > "$abs_path/.gitattributes"

echo "Built to $abs_path"