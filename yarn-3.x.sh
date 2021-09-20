git clean -xfd
git checkout -f
yarn set version berry
yarn
yarn node index.js

git checkout -f
yarn node index.js