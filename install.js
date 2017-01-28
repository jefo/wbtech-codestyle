var
  fs = require('fs'),
  path = require('path');

var EDITORCONFIG_FILE = '.editorconfig';

var
  folders = __dirname.split(path.sep),
  rootInd = folders.length - 1,
  dst;

while (rootInd > 0 && folders[rootInd - 1] === 'node_modules')
  rootInd -= 2;

dst = folders.slice(0, rootInd + 1).join(path.sep)

fs
  .createReadStream(EDITORCONFIG_FILE)
  .pipe(fs.createWriteStream(path.join(dst, EDITORCONFIG_FILE)))
  .on('error', console.error)
