const memfs = require("memfs").fs;
const fs = require("fs");
const {ufs} = require("unionfs");
const {patchRequire} = require("fs-monkey");

memfs.writeFileSync(`/memfs.log.js`, "module.exports.log = () => { console.log(`Hello from memfs.log.js`) }");
fs.writeFileSync(`${__dirname}/fs.log.js`, "module.exports.log = () => { console.log(`Hello from fs.log.js`) }")

ufs
  .use(memfs)
  .use(fs);
patchRequire(ufs);

require(`/memfs.log.js`).log();
require(`${__dirname}/fs.log.js`).log();
