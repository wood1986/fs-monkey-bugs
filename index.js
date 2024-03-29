
const fs = require(`fs`);
const {ufs} = require(`unionfs`);
const {fs:memfs} = require(`memfs`);

const {patchFs, patchRequire} = require(`fs-monkey`);
  ufs
  .use(memfs)
  .use({...fs});
patchFs(ufs);
patchRequire(ufs);

fs.writeFileSync(`./fs.log.js`, `module.exports.log = () => { console.log(\`Hello from fs.log.js\`) }`);
console.log("fs", fs.readFileSync(`./fs.log.js`).toString());
console.log("ufs", ufs.readFileSync(`./fs.log.js`).toString());
require(`./fs.log.js`).log();

fs.writeFileSync(`/memfs.log.js`, `module.exports.log = () => { console.log(\`Hello from memfs.log.js\`) }`);
console.log("fs", fs.readFileSync(`/memfs.log.js`).toString());
console.log("ufs", ufs.readFileSync(`/memfs.log.js`).toString());
console.log("memfs", memfs.readFileSync(`/memfs.log.js`).toString());
require(`/memfs.log.js`).log();
