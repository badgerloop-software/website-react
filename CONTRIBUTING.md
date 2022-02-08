# Contributing

## Basic Setup
- See readme

## CI/CD Pipelines
- Hosted on Github pages
- Testing using Jest
- Coverage reporting using Coveralls (could use other similar tools like CodeCov or Codacity but I think Coveralls is cool and works well :)).
- lint
- etc.

## Hosting
- Hosted on Github pages
- A Github action (`build-deploy.yml`) builds the project (by checking out, install node and NPM packaged, running npm build, and placing production-ready files in `./build`) and deploys (using `peaceiris/actions-gh-pages@v3`)
  - the Github Action [actions-gh-pages from peaceiris](https://github.com/peaceiris/actions-gh-pages) allows for easy deployment without any configuration and a runner automatically creates a `GITHUB_TOKEN` secret
- On each push to main the `./build` directory is placed in the `gh-pages` branch
- Github pages then hosts the `gh-pages` branch
- [Here](https://codeburst.io/deploying-a-react-app-using-github-pages-and-github-actions-7fc14d380796) is a good guide on this setup process. [Here](https://medium.com/swlh/deploy-create-react-app-to-github-pages-using-github-actions-4e95ae7fd65f) and [here](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp) also look decent.

## Testing
- We use [Jest.js](jestjs.io) as our testing framework
  - Jest is very popular, works seamlessly with React, and is well documented
  - To test locally run: `npm run test`
  - To generate coverage report run: `npm run coverage`
  - *Note: these `npm run` commands are just shortcuts/scripts specified in `package.json`*
  - Jest is configured in `jest.config.json` (could just place in `Package.json`, but I think splitting things out makes it more clear)
- [Babel](https://babeljs.io) is used a JavaScript compiler to help convert ECMAScript 2015+ code into a backwards compatible version of JavaScript to be used by Jest
- Structure
  - all tests should be titled `<name>.test.js` and placed in the __tests__ directory
  - all mocks should be placed in __mocks__ directory
  - if you are unfamiliar with mocks or testing, see the useful info page
- Mocking
- babel
- grunt/converting es?
- Command for coverage
- Coveralls
- PRs and not being able to merge without 80%?

## Pre-Commit Hooks
- ESLint is used as linter
  - configuration is in `.eslintrc.json`
  - it will check for code style issues, formatting, problems, etc.
  - we are using Google style guide
  - run with `npm run lint`
- Formatting is done using Prettier
  - configuration is in `.prettierrc.json`
  - it checks for formatting problems
  - if you install a Prettier extension in your editor you can configure it to use this configuration as well
  - this way all people developing on the project have same formatting style, and it is enforced as a pre-commit hook
  - to run prettier checks (without editing any files): `npm run prettier:check`
  - to run prettier and write formatting changes: `npm run prettier:write`
- Use Husky to enforce styling with pre-commit hooks
  - Before you can commit successfully, the lint and style checks must pass
  - the configuration for this is in `.husky/pre-commit` which tells it to run `lint-staged`
  - the `lint-staged` configuration is in `package.json` and just tells Husky the following:
    ```json
    "*.{js,jsx,ts,tsx}": [
        "eslint --max-warnings=0"
    ],
    "*.{js,jsx,ts,tsx,json,css,js}": [
        "prettier --write"
    ]
    ```
    - this runs eslint on all js/ts files, and prettier on all js/ts, json, css, and js files
  - this ensures consistent style
