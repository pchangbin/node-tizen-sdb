# Tizen SDB Wrapper for Node.js

 This is a kind of wrapper to use SDB command for Tizen SDK in Node.js program.
It's similar to ADB in Android SDK.

## Precondition
 It's required that command 'sdb' is available from command line. For that,
 Tizen SDK is installed and environment PATH is set for it properly.

## APIs
 These will be getting richier as per needed.
 If 'tizen-sdb' is required from REPL, stdout and stderr will be showed in
 terminal.

### sdb.root([aOn = true])
 This invokes 'sdb root on/off' command.
  * aOn : If this is falsy or case insensitive 'off', it'll goes 'off'. 'on'
  otherwise.

### sdb.shell(aCmd)
 This invokes 'sdb shell <aCmd>'
 This is used for only simple command yet. It may be getting richer.
