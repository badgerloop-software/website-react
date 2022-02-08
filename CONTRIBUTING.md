# Contributing

## Basic Setup
- See readme

## CI/CD Pipelines
- Hosted on Github pages
- Testing using Jest
- Coverage reporting using Coveralls (could use other similar tools like CodeCov or Codacity but I think Coveralls is cool and works well :)).
- lint
- etc.

## Infastructure
- Hosted on Github pages
- A Github action (`build-deploy.yml`) builds the project (by checking out, install node and NPM packaged, running npm build, and placing production-ready files in `./build`) and deploys (using `peaceiris/actions-gh-pages@v3`)
  - the Github Action [actions-gh-pages from peaceiris](https://github.com/peaceiris/actions-gh-pages) allows for easy deployment without any configuration and a runner automatically creates a `GITHUB_TOKEN` secret
- On each push to main the `./build` directory is placed in the `gh-pages` branch
- Github pages then hosts the `gh-pages` branch