const Generator = require('./lib/Generator');
const generateHTML = require('./src/page-template');

const { writeFile, copyFile } = require('./src/generate-pages');

new Generator().initializeGenerator();
