git clean -xfd
git checkout -f
yarn set version from sources --repository https://github.com/wood1986/berry.git --branch feat/runtime-patch-node-fs
yarn
yarn node index.js
