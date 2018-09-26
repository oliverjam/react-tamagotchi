# Parcel Setup for React

This is a guide for setting up a React app to be bundled with [Parcel](https://parceljs.org/) 📦

## Quick start

If you want to understand what everything does then have a look at the [what everything does](#what-everything-does) section.

### Install

1.  `npm init -y` to initialise your repo
2.  `npm i -D parcel-bundler babel-preset-env babel-preset-react babel-plugin-transform-class-properties` to install dev dependencies
3.  `npm i react react-dom` to install dependencies
4.  `"start": parcel index.html` add start script to `package.json`
5.  Create `.babelrc` file containing:

```js
{
  "presets": ["env", "react"],
  "plugins": ["transform-class-properties"]
}
```

Parcel will automatically use Babel to transpile all ES6 and React syntax out of the box, but we want to use a new feature (class properties), so we need to tell Parcel to use an extra plugin.

5.  Create `index.html` file containing:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```

Parcel will use this as an 'entrypoint' to your app. It'll find the `index.js` script in there and follow all the `import`s to bundle everything. Then it'll replace the `index.js` with the final JS bundle when it outputs the `dist` folder.

6.  Create `index.js` with your react setup:

```js
import React from 'react';
import { render } from 'react-dom';

const App = () => <h1>Hello World</h1>;

render(<App />, document.getElementById('root'));
```

### Jest Setup

We need a few extra things to get Jest working with our ES6+ and React code.

1.  `npm i -D jest babel-jest babel-core` to install testing dependencies
2.  `"test": jest --watch` add test script to `package.json`

Jest will read the `.babelrc` file to know what presets/plugins it should use. Parcel actually defaults to using `babel-preset-env` and `babel-preset-react`, but Jest doesn't, which is why we had to install and specify them.

### Eslint Setup

1.  `npm i -D eslint eslint-config-recommended eslint-plugin-react babel-eslint` to install dev dependencies
2.  create `.eslintrc.json` file with:

```json
{
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:react/recommended"]
}
```

This will tell ESlint to use `babel-parser` instead of its own. That way it won't complain about new things that Babel understands/transpiles away.

We're just setting up the basic ESlint and React recommended presets. Feel free to extend with your own rules :)

3.  You may need to restart your editor

## What everything does

We want to be able to write modular code using the [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) `import`/`export` syntax. We also want to be able to write modern ES6+ and custom React syntax (JSX).

Since browsers don't understand these things we need something to process our source files, transpile them with Babel and then bundle them together into files the browser understands.

Parcel automatically uses the [`babel-preset-env`](https://babeljs.io/env/) and [`babel-preset-react`](https://babeljs.io/docs/plugins/preset-react/) presets to transpile ES6 and JSX. We've also added the `babel-plugin-transform-class-properties`(https://babeljs.io/docs/plugins/transform-class-properties/) plugin so we can write our class state without needing a constructor function.

Your start script (`parcel index.html`) will tell Parcel to use the `index.html` file as an 'entrypoint'.

This means Parcel will start there, find your JS file linked in a script tag, then follow the trail of `import`s until it has built up a 'tree' of your entire app.

Then it smushes all the files together in a smart way until it's left with a single JS file.

It copies your `index.html` file into a `dist` folder, along with the newly bundled JS file (which it also links in the new `index.html` for you).

If you import CSS or SVGs (or other resources Parcel understands) they'll get picked up too. The CSS will all be smushed together into one file and copied into the `dist` folder. Any SVG files will be copied across as they are (although they will get a hashed filename for caching purposes).

You can open up the `dist` folder and look around. The JS Parcel produces will be weird (it has to use lots of IIFEs and closures to ensure modules are isolated correctly inside one big file) but it should be readable.

### Dependencies

* `parcel-bundler`: will do the actual bundling
* `babel-plugin-transform-class-properties`: lets us write our state as an object directly on a class ([more info here](https://github.com/oliverjam/intro-react-workshop/blob/master/03-surpass-with-class/README.md#state))
