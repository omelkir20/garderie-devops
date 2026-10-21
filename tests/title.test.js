const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('le frontend contient le titre Ma Garderie', () => {
  const file = path.join(__dirname, '../frontend/app/page.js');
  const source = fs.readFileSync(file, 'utf8');

  assert.match(source, /Ma Garderie/, 'Le titre Ma Garderie est absent');
});
