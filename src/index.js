// ref:
// - https://umijs.org/plugin/develop.html

import { join } from 'path';
import { readFileSync } from 'fs';

export default function (api, options) {

  function generateContext() {
    const tpl = join(__dirname, '../template/DragDropComponent.js');
    const tplContent = readFileSync(tpl, 'utf-8');
    api.writeTmpFile('DragDropComponent.js', tplContent);
  }

  api.onGenerateFiles(() => {
    generateContext();
  });

  api.addRuntimePlugin(join(__dirname, './runtime'));

  api.addUmiExports([
    {
      exportAll: true,
      source: '@alitajs/dnd',
    },
  ]);

}
