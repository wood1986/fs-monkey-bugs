yarn set version berry
git clean -xfd
git checkout -f
yarn
yarn node index.js
