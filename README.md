# Ember-World-Flags
[![npm Version][npm-badge]][npm]
[![Build Status][travis-badge]][travis]
[![Ember Observer Score](http://emberobserver.com/badges/ember-world-flags.svg)](http://emberobserver.com/addons/ember-world-flags)


This addon provides a `world-flag` component that can display any country's flag in any arbitrary size.


## Installation

* ember-cli < 0.2.3 `ember install:addon ember-world-flags`
* ember-cli >= 0.2.3 `ember install ember-world-flags`

## Example Usage

```hbs
{{world-flag-svg "ca"}}
{{world-flag-svg "ca" 32}}
{{world-flag-svg "ca" 50}}
```

in the examples above, "ca" is the <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> code and the 2nd argument is the size of the flag, in pixels. eg 50 means a flag the flag will be 50 pixels by 50 pixels.


There is also the original legacy helper that provides flags from a png file in only two sizes: 16x16 or 32x32

```hbs
{{world-flag "ca"}}
{{world-flag "ca" 16}}
{{world-flag "ca" 32}}
```

Check out the demo on [github pages](http://rounders.github.io/ember-world-flags/).

## Contributing

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[travis]: https://travis-ci.org/rounders/ember-world-flags
[travis-badge]: https://img.shields.io/travis/rounders/ember-world-flags.svg?branch=master&style=flat-square
[npm]: https://www.npmjs.org/package/ember-world-flags
[npm-badge]: https://img.shields.io/npm/v/ember-world-flags.svg?style=flat-square
