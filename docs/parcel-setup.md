# Parcel Setup for React

This is a guide for setting up a React app to be bundled with [Parcel](https://parceljs.org/) 📦

## Quick start

If you want to understand what everything does then have a look at the [what everything does](#what-everything-does) section.

### Install

1. `npm init -y` to initialise your repo
2. `npm i -D parcel-bundler babel-preset-env babel-preset-react babel-preset-stage-0` to install dev dependencies
3. `npm i react react-dom` to install dependencies
4. `"start": parcel index.html` add start script to `package.json`
5. Create `.babelrc` file containing:

  ```js
  {
      "presets": ["env", "react", "stage-0"]
  }
  ```
This will tell Parcel what Babel plugins to transpile your code with.

5. Create `index.html` file containing:

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

6. Create `index.js` with your react setup:

  ```js
  import React from 'react'
  import { render } from 'react-dom'

  const App = () => <h1>Hello World</h1>

  render(
    <App />,
    document.getElementById('root')
  )
  ```

### Eslint Setup

1. `npm i -D eslint eslint-config-recommended eslint-plugin-react babel-eslint` to install dev dependencies
2. create `.eslintrc.json` file with:
```json
{
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
}
```
This will tell ESlint to use `babel-parser` instead of its own. That way it won't complain about new things that Babel understands/transpiles away.

We're just setting up the basic ESlint and React recommended presets. Feel free to extend with your own rules :)

3. You may need to restart your editor

## What everything does

We want to be able to write modular code using the [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) `import`/`export` syntax. We also want to be able to write modern ES6+ and custom React syntax (JSX).

Since browsers don't understand these things we need something to process our source files, transpile them with Babel and then bundle them together into files the browser understands.

Your start script (`parcel index.html`) will tell Parcel to use the `index.html` file as an 'entrypoint'.

This means Parcel will start there, find your JS file linked in a script tag, then follow the trail of `import`s until it has built up a 'tree' of your entire app.

Then it smushes all the files together in a smart way until it's left with a single JS file.

It copies your `index.html` file into a `dist` folder, along with the newly bundled JS file (which it also links in the new `index.html` for you).

If you import CSS or SVGs (or other resources Parcel understands) they'll get picked up too. The CSS will all be smushed together into one file and copied into the `dist` folder. Any SVG files will be copied across as they are (although they will get a hashed filename for caching purposes).

You can open up the `dist` folder and look around. The JS Parcel produces will be weird (it has to use lots of IIFEs and closures to ensure modules are isolated correctly inside one big file) but it should be readable.

### Dependencies

- `parcel-bundler`: will do the actual bundling
- `babel-preset-env`: the 'standard' Babel preset for transpiling real JS
- `babel-preset-react`: will transpile React specific stuff like JSX
- `babel-preset-stage-0`: will transpile fun new proposals that aren't _technically_ in the language yet (like object spread and class instance properties)
