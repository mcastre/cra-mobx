# Regions Customer Journey UI

_Current Stable Version: 1.1.0_ 

API Version: 1.2

[Version History](https://alm.rgbk.com/spaces/display/ROCO/Release+Notes)

This project contains the front-end UI code for the new Customer Journey project for Regions.

## Usage

From a command prompt shell, follow these steps in order to run the app locally.

### 1. Clone project:

```bash

  # Clone the project
  git clone ssh://git@alm.rgbk.com/roco/front-end.git

```

### 2. Install dependencies

```bash

  # navigate to the project folder
  cd front-end

  # install project dependencies
  npm install

```

### 3. Run the app

**Run the client side app without a mock server (express):**

```bash

  # run the client-side application on a static webpack dev server
  npm start

```

And Open [http://localhost:3000](http://localhost:3000) to view the client app in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

&nbsp;

---

&nbsp;

> If you would like to use Redux Devtools, make sure you have a `.env` file at the root of your project
> and add `ROCO_APP_USE_REDUX_DEVTOOLS=true`. Once you add that, Redux Devtools will be available to use.

> If you would like to seed data so that you do not have to fill out every field in the app, again, 
> make sure you have a `.env` file at the root of your project and then set `ROCO_APP_LOAD_SEED_DATA=true` 
> and all of the form fields will be filled out for you.

## Linting, Testing and Building

### Linting

The project is set up to use [ESLint](https://eslint.org/) with the AirBnB preset and some custom rules. To make development easier, it is
recommended to set up your code editor to integrate with ESLint. If you want to manually run ESLint, you can run:

```bash
    npm run lint
```

> A Git hook is fired before each commit which runs `eslint --fix` on all of the changed files. If there are linting
> errors that cannot be fixed by ESLint, the commit will be rejected.

### Unit Testing

This project uses [Jest](https://jestjs.io/docs/en/getting-started) and [Enyzme](https://github.com/airbnb/enzyme) for unit testing React code. Snapshot testing is one way of writing meaningful unit tests. Review the docs [here](https://jestjs.io/docs/en/snapshot-testing). Simply run the following command to run the test suite and update snapshots:

```bash

  npm test

```

> This project has a Git hook set up to run `npm test` on every `git push` to make sure all tests are
> passing before code is pushed. If a test fails, the push will fail and the failed tests will need to be fixed before
> attempting another push.

&nbsp;

---

&nbsp;

## Building for Production

```bash

  # run the optimized build and generate the static assets as client-side app
  npm run build

```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

You can run a prod build version of the app locally by using this command:

```bash

  # serves the optimized build on localhost:5000,
  # assuming you have installed npx on your machine
  npx serve -s build

```

&nbsp;

---

&nbsp;

&nbsp;

## Other Cool Stuff

### Majestic - Jest UI

You can run jest tests using [Majestic](https://github.com/Raathigesh/majestic), an intuitive GUI for Jest tests. You can use Majestic to:

- Run and debug individual tests
- Update snapshots

To automatically run an instance of Majestic in your browser, run the following command:

```
npm run test-ui
```

You should see something like this in your browser:

!["Majestic UI - Start View"](src/assets/images/majestic-ui-init.png 'Majestic UI - Start View')

Click on the yellow Run tests button in the left sidebar to run all unit tests. Click on a spec file in the left sidebar to view or run the individual test.

`Ctrl + C` to quit Majestic.

&nbsp;

### Jest Coverage Report

Jest comes with [Instabul](https://istanbul.js.org/), which prints out a thorough coverage report for the codebase. There are 2 ways to view the coverage report:

1. In command line, run:

```bash

  # run the single-run mode and generate the coverage report
  jest --coverage

```

2. Open this path: `/coverage/lcov-report/index.html` from your project root in the browser. This displays a friendly UI of the coverage report.

&nbsp;

### Prettier

We all want to focus on writing clean code, instead of wasting time and brain power trying to fix formatting mistakes. Introducing... [Prettier](https://prettier.io/)!

Prettier is an opinionated code formatter that plays nicely with our front-end stack. It can format JSX, styled-components, JS, JSON, and more. It also follows eslint/AirBnB style guidelines.

Ideally, we want to set the editor's settings to auto-format on saving of a file. Prettier supports a wide range of editors with specific plugins and settings to automate the formatting.

#### VSCode settings

1. Download the editor plugin: [prettier-vscode](https://github.com/prettier/prettier-vscode).
2. Open up the editor Settings (Mac: cmd + , | PC: File > Preferences > Settings) > User Settings > Text Editor > Formatting, then enable Format on Save.

#### Visual Studio settings

1. Download plugin [JavascriptPrettier](https://github.com/madskristensen/JavaScriptPrettier)
2. Do stuff to make it format on save

#### Webstorm settings

Has built-in support. May need additional configuration to run on save

---

&nbsp;

## Changelog

&nbsp;

[v1.1.0](https://alm.rgbk.com/source/projects/ROCO/repos/front-end/browse/docs/changelog.md)
