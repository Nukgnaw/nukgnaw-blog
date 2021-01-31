#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd blog/.vuepress/dist

# if you are deploying to a custom domain
echo 'www.nukgnaw.com' > CNAME

git init
git config user.name "nukgnaw" 
git config user.email "kun7016@gmail.com"
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://$GH_TOKEN@github.com/Nukgnaw/nukgnaw.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -