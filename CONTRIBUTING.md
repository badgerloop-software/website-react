# Contributing

-   See [useful links page](useful-info.md) for some good guides/tutorials

## Basic Setup

-   First, clone this repo to your local system
-   Next, run `npm i` to install NPM package dependencies
-   Then, start local server by running `npm start`
-   See [readme](README.md) for more details

## Version Control

-   The master branch is locked, therefore all changes need to be merged in via a pull request (PR)
-   Please create your own branch, work on that, and then open a PR when ready to merge into main
-   The build must be succeeding before PR's can be merged, so ensure all tests pass, linter/formatter do not complain before asking for reviews on your PR
-   Once someone reviews your PR, complete it to merge the code into master

## Hosting

-   Hosted on Github pages
-   A Github action (`build-deploy.yml`) builds the project (by checking out, install node and NPM packaged, running npm build, and placing production-ready files in `./build`) and deploys (using `peaceiris/actions-gh-pages@v3`)
    -   the Github Action [actions-gh-pages from peaceiris](https://github.com/peaceiris/actions-gh-pages) allows for easy deployment without any configuration and a runner automatically creates a `GITHUB_TOKEN` secret
-   On each push to main the `./build` directory is placed in the `gh-pages` branch
-   Github pages then hosts the `gh-pages` branch
-   [Here](https://codeburst.io/deploying-a-react-app-using-github-pages-and-github-actions-7fc14d380796) is a good guide on this setup process. [Here](https://medium.com/swlh/deploy-create-react-app-to-github-pages-using-github-actions-4e95ae7fd65f) and [here](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp) also look decent.

## Testing

-   We use [Jest.js](jestjs.io) as our testing framework
    -   Jest is very popular, works seamlessly with React, and is well documented
    -   To test locally run: `npm run test`
    -   To generate coverage report run: `npm run coverage`
    -   _Note: these `npm run` commands are just shortcuts/scripts specified in `package.json`_
    -   Jest is configured in `jest.config.json` (could just place in `Package.json`, but I think splitting things out makes it more clear)
-   [Babel](https://babeljs.io) is used a JavaScript compiler to help convert ECMAScript 2015+ code into a backwards compatible version of JavaScript to be used by Jest
-   Structure
    -   all tests should be titled `<name>.test.js` and placed in the **tests** directory
    -   all mocks should be placed in **mocks** directory
    -   if you are unfamiliar with mocks or testing, see the useful info page
-   Coveralls is a tool used to display our coverage visually
    -   The Github actions deploy script has a step that generates coverage report, and then uploads the results to Coveralls
    -   Coveralls then parses the results and displays them
    -   We have a badge in the readme that updates with current coverage percent, or you can click [here](https://coveralls.io/github/badgerloop-software/website-react?branch=main)
-   You can see a couple sample basic tests in the directory for `App.js`, `sum.js`, and `index.js` _(note these are dummy tests and really do not do anything, except for `sum.test.js`)_
-   The file `reportWebVitals.js` is an example of a file we want to exclude from coverage so it does not negatively impact our coverage, and this is done by adding `/* istanbul ignore file */` at the top

## Pre-Commit Hooks

-   ESLint is used as linter
    -   configuration is in `.eslintrc.json`
    -   it will check for code style issues, formatting, problems, etc.
    -   we are using Google style guide
    -   run with `npm run lint`
-   Formatting is done using Prettier
    -   configuration is in `.prettierrc.json`
    -   it checks for formatting problems
    -   if you install a Prettier extension in your editor you can configure it to use this configuration as well
    -   this way all people developing on the project have same formatting style, and it is enforced as a pre-commit hook
    -   to run prettier checks (without editing any files): `npm run prettier:check`
    -   to run prettier and write formatting changes: `npm run prettier:write`
-   Use Husky to enforce styling with pre-commit hooks
    -   Before you can commit successfully, the lint and style checks must pass
    -   this ensures consistent style
    -   the configuration for this is in `.husky/pre-commit` which tells it to run `lint-staged`
    -   the `lint-staged` configuration is in `package.json` and just tells Husky the following:
        ```json
        "*.{js,jsx,ts,tsx}": [
            "eslint --max-warnings=0"
        ],
        "*.{js,jsx,ts,tsx,json,css,js}": [
            "prettier --write"
        ]
        ```
        -   this runs eslint on all js/ts files, and prettier on all js/ts, json, css, and js files
