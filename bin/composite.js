#!/usr/bin/env node
const Bundler = require('parcel-bundler');
const path = require('path');

const entryFiles = path.resolve(process.cwd(), 'composite.config.js');
const options = {
  outDir: path.resolve(__dirname, '..', 'public'),
  outFile: 'componentBundle.js',
};

(async function() {
  const bundler = new Bundler(entryFiles, options);
  const bundle = await bundler.bundle();
})();

require('../dist/server/start');
