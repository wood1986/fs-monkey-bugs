// const fs = require('fs');
// const { ufs } = require('unionfs');
// const { fs:memfs, vol } = require('memfs');
// const { patchFs, patchRequire } = require('fs-monkey');

// const ofs = { ...fs };

// ufs
//   .use(memfs)
//   .use(ofs);
// patchRequire(ufs);
// patchFs(ufs)

// console.log(fs, ofs)

// fs.writeFileSync(`/memfs.log.js`, "module.exports.log = () => { console.log(`Hello from memfs.log.js`) }");
// fs.writeFileSync(`${__dirname}/fs.log.js`, "module.exports.log = () => { console.log(`Hello from fs.log.js`) }")

// require(`/memfs.log.js`).log();
// require(`${__dirname}/fs.log.js`).log();

const fs = require(`fs`);
const {ufs} = require(`unionfs`);
const {fs: memfs} = require(`memfs`);
const {patchFs, patchRequire} = require(`fs-monkey`);

const ofs = {...fs};

memfs.writeFileSync(`/memfs.log.js`, `module.exports.log = () => { console.log(\`Hello from memfs.log.js\`) }`);
fs.writeFileSync(`${__dirname}/fs.log.js`, `module.exports.log = () => { console.log(\`Hello from fs.log.js\`) }`);

ufs
  .use(memfs)
  .use(ofs);
patchFs(ufs); // make fs recognizes ufs

patchRequire(fs);

// require(`pnpapi`).resetRealFs(fs);

require(`${__dirname}/fs.log.js`).log();
console.log(ufs.readFileSync(`/memfs.log.js`));
console.log(memfs.readFileSync(`/memfs.log.js`));
console.log(fs.readFileSync(`/memfs.log.js`));

require(`/memfs.log.js`).log();
