# sass-var-loader

A custom loader for Webpack that allows you to break the rules by providing sass variables on-the-fly in things like imports and url's.

All you need to do is provide your variable in `~~` like this: `~~myVar~~`.

## Install

```
npm install --save-dev sass-var-loader
```

## Usage
In your Webpack config:
```js
module.exports = {
  ...
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass', 'sass-var']
      }
    ]
  },
  sassVarLoader: {
      myVariable: 'newValue'
  }
};
```

## Example
mysass.scss:
```scss
@import 'some/custom/~~theme~~/variable'

.cake {
    color: $magic;
}
```

And your `~~theme~~` will be replaced with the value you would like at runtime!

You can provide as many variables as you would like and `sass-var-loader` will do the magic for you.
