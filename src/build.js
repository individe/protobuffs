const protobufjs = require('protobufjs');
const fs = require('fs');

const root = protobufjs.loadSync('./src/proto/index.proto');

fs.writeFileSync('./src/build.json', JSON.stringify(root.toJSON()));