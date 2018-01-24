# Parcel Setup for React

This is a guide to set up a react app using [Parcel](https://github.com/parcel-bundler/parcel).

## Install
1. `npm init -y` to initialise your repo
2.  `npm i -D parcel-bundler babel-preset-env babel-preset-react babel-preset-stage-0` to install dev dependencies
3.  `npm i react react-dom` to install dependencies
3. `"start": parcel index.html` add start script
4. create `.babelrc` file with:
```js
{
    "presets": ["env", "react", "stage-0"]
}
```
This file is imported by parcel.

5. create `index.html` file with:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title> My App </title>
    </head>
    <body>
        <div id="root"></div>
        <script scr="index.js"></script>
    </body>
</html>
```
6. create `index.js` file with your react setup:
```js
import React from 'react'
import { render } from 'react-dom'

const App = () => <h1>Hello World</h1>

render(
    <App />,
    document.getElementById('root')
)
```

## Eslint Setup
1. `npm i -D eslint eslint-config-recommended eslint-plugin-react babel-eslint` to install dev dependencies
2. create `.eslintrc.json` file with:
```js
{
  "parser": "babel-eslint",
  "extends": [
          "eslint:recommended",
          "plugin:react/recommended"
      ]
}
```
3. Restart editor