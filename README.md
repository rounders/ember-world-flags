# Ember-World-Flags
[![npm version](https://badge.fury.io/js/ember-world-flags.svg)](https://badge.fury.io/js/ember-world-flags)
[![Ember Observer Score](https://emberobserver.com/badges/ember-world-flags.svg)](https://emberobserver.com/addons/ember-world-flags)

This addon provides a `world-flag` component that can display any country's flag in any arbitrary size.

## Compatibility

* Ember.js v4.4 or above
* Ember CLI v4.4 or above
* Node.js v12 or above

## Installation

`ember install ember-world-flags`

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

* `git clone` this repository
* `yarn install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`


## License

This project is licensed under the [MIT License](LICENSE.md).
