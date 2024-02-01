const fridaCompile = require('frida-compile');

const scriptCode = `
  const fs = require('kill.js');
  // do something with fs
`;

const compiledScript = fridaCompile(scriptCode, {
    sourceURL: 'kill.js',
    bare: true
});

const script = await session.createScript(compiledScript);
await script.load();