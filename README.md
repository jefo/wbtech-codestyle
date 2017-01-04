# wbtech-codestyle
All code style checkers in one package.

## Installation
As always:
```shell
# npm install
npm i -D wbtech-codestyle

# yarn install
yarn add --dev wbtech-codestyle
```

## Usage
### eslint
eslint configs are modular and contains only rules, so you can mix them and pick only necessary. You can see full list of configs [here](https://github.com/jefo/wbtech-codestyle/blob/master/eslint).

Example:
```yml
# .eslintrc.yml
---
  parserOptions:
    ecmaVersion: 6
    sourceType: 'module'
  env:
    browser: true
  root: true
  extends:
    - ./node_modules/wbtech-codestyle/eslint/es5.yml
    - ./node_modules/wbtech-codestyle/eslint/es2015+.yml
```

**Note:** `es2015+` config redefines some rules from `es5`, so it should be listed after `es5`.

## Contribution
Don't forget to run tests before make a PR.

```shell
npm test
```
