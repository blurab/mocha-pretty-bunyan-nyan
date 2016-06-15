# mocha-pretty-bunyan-reporter 
## description

bunyan is a pretty nice package to log in json format, and provides an awesome cli to display it in human readable way.  

**But**, when you run your test with mocha, you cannot take benefit  of the cli, so you then get raw json logs that is a mess to read.

*mocha-pretty-bunyan-reporter* provides a mocha reporter based on *nyan* reporter that display bunyan with a pretty/human readble format.


## Install

```
npm install mocha-pretty-bunyan-reporter --save-dev
```

## Usage

```
mocha --reporter mocha-pretty-bunyan-reporter
```
