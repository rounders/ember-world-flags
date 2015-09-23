# Ember-World-Flags

This addon provides a `world-flag` component that can display any country's flag in 16x16 or 32x32. 

## Installation

* ember-cli < 0.2.3 `ember install:addon ember-world-flags`
* ember-cli >= 0.2.3 `ember install ember-world-flags`

## Example Usage


```hbs
{{world-flag "ca"}}
{{world-flag "ca" 16}}
{{world-flag "ca" 32}}
```

in the examples above, "ca" is the <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> code and where 16 or 32 represent the width & height of the flags in pixels. The only sizes currently available are 16 and 32.

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
