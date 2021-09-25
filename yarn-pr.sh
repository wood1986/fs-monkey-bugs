git clean -xfd
git checkout -f
yarn set version berry
yarn set version from sources --branch 3492
yarn
yarn node index.js

git checkout -f
yarn node index.js