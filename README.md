# mocha-pretty-bunyan-ntan 
## description

bunyan is a pretty nice package to log in json format, and provides an awesome cli to display it in human readable way.  

**But**, when you run your test with mocha, you cannot take benefit  of the cli, so you then get raw json logs that is a mess to read.

*mocha-pretty-bunyan-nyan* provides a mocha reporter *nyan*  (by default) that display bunyan with a pretty/human readble format.


## Install

```
npm install mocha-pretty-bunyan-nyan --save-dev
```

## Usage

```
mocha --reporter mocha-pretty-bunyan-nyan
```

## example of output:

```
[12:02:28] Using gulpfile ~/Dev/node2/ticketing/gulpfile.js
[12:02:28] Starting 'test'...
[2016-06-18T10:02:29.642Z]  INFO: db/43349 on xxxx-MacBook-Air.local: start mongodb
[2016-06-18T10:02:29.683Z]  INFO: db/43349 on xxxx-MacBook-Air.local: open
[2016-06-18T10:02:29.746Z]  INFO: mocha/43349 on xxxx-MacBook-Air.local: QR a1a6a5da-4cce-48f6-a52b-fb3490e3d84d"
[2016-06-18T10:02:29.749Z]  INFO: mocha/43349 on xxxx-MacBook-Air.local: done
[2016-06-18T10:02:29.749Z] DEBUG: mocha/43349 on xxxx-MacBook-Air.local: debug
 1   -__,------,
 0   -__|  /\_/\
 0   -_~|_( ^ .^)
     -_ ""  ""

  1 passing (123ms)

[12:02:29] Finished 'test' after 1.4 s
```
## mochabunyan.opts

It is possible to configure few things by putting in the test directory a file **test/mochabunyan.opts** that could contains the following options:  
**mute** set it true if you want to mute all logs  
**level** if you want to set the global log level  
**reporter** if you want to use a different reporter that nyan  

ex:
{
		"mute":false,
        "level":"debug",
        "reporter":"spec"
}


