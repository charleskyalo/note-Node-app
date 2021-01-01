# node note app

## Table of contents

- [General info](#General-info)

- [Technologies used](#technologies-used)

- [Usage](#usage)

## General info

This is a fun project created while learning [nodejs fundamentals course offered by next.tech](https://next.tech/catalog/courses/learning-node-js-fundamentals)
You can [signup and take the course](https://nt.dev?ref=6bcda7ac) if you are an intermediate javascript or advanced JavaScript developer and a beginner or intermediate node js developer.

## Technologies used

1. [node js](https://nodejs.org/en/docs/)

2. [javaScript (es6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

3. [yargs module](https://www.npmjs.com/package/yargs)

## usage

To use this note app you must have node installed development environment.
if not install it either using [nvm](https://github.com/nvm-sh/nvm) or install it from the [node-js foundation](https://nodejs.org/).

clone this repository using
then cd to that directory;

```bash
$ git clone https://github.com/charleskyalo/note-Node-app.git

$ cd note-Node-app
```

run npm install to install node depanncies in package.json

```bash
$ npm install

```

To check for the app usage run

```bash
$ node app.js --h

Starting app.js 
Starting note.js 
**********
note taking command line application  made using node.js
**********
Usage: app.js <command> [options]

Commands:
  app.js add     Add a new note
  app.js list    list all notes
  app.js read    Read a note
  app.js remove  Remove a note

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]

copyright 2020

==================================================
node app.js add --h

**********
app.js add

Add a new note

Options:
  --version    Show version number                                     [boolean]
  -h, --help   Show help                                               [boolean]
  --title, -t  Title of note                                          [required]
  --body, -b   Body of note                                           [required]

====================================================
add a new note example 

node app.js add -t "hello" -b "try it out"

```


