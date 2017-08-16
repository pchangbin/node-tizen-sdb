'use strict';

const os = require('os');
const child_process = require('child_process');

const {execFile, spawnSync} = child_process;

const execName = 'sdb';
(function checkSDBAvailable() {
  const whereis = os.platform().includes('win32') ? 'where' : 'which';
  if (spawnSync(whereis, [execName]).status !== 0) {
    throw new Error(`SDB command ${execName} is not available in PATH.`);
  }
})();

module.exports = {
  root(aOn = true) {
    const param = (function() {
      try { aOn = aOn.toLowerCase() !== 'off'; } catch(e) { }

      return aOn ? 'on' : 'off';
    })();
    execFile(execName, ['root', param], showResult);
    return this;
  },
  shell(aCmd) {
    execFile(execName, ['shell', aCmd], showResult);
  }
};

const isRequiredInRepl = module.parent.id === '<repl>';
function showResult(aError, aStdout, aStderr) {
  if (!isRequiredInRepl) return;

  if (aError) throw new Error(aError);
  if (aStdout) console.log(aStdout);
  if (aStderr) console.error(aStderr);
}

