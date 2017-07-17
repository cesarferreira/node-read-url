# read-url
> Reads an URL into a string

<p align="center">
  <img src="ss.png" width="100%" />
</p>

[![Build Status](https://travis-ci.org/cesarferreira/read-url.svg?branch=master)](https://travis-ci.org/cesarferreira/read-url)
[![npm](https://img.shields.io/npm/dt/read-url.svg)](https://www.npmjs.com/package/read-url)
[![npm](https://img.shields.io/npm/v/read-url.svg)](https://www.npmjs.com/package/read-url)

## Install

```sh
yarn add read-url
```

## Usage

```js
require('read-url')
  .promise('https://raw.githubusercontent.com/cesarferreira/dryrun/master/LICENSE')
  .then(response => {
    log(response)
  })
  .catch(err => {
    log(err)
  });

```

## Created by
[Cesar Ferreira](https://cesarferreira.com)

## License
MIT © [Cesar Ferreira](http://cesarferreira.com)
