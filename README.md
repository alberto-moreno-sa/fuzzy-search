# Fuzzy Search

Fuzzy Search is bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), a React toolbox with no build configuration. It was recently promoted out of the [Facebook Incubator](https://github.com/facebookincubator) GitHub organization and into the main [Facebook](https://github.com/facebook) GitHub organization, so it is well maintained.

### Relevant `create-react-app` links

- [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Getting started

Make sure you have a few dependencies installed on your machine:

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [yarn](https://yarnpkg.com/en/)

Clone the repo and install local dependencies with:

```
yarn
```

## Development

```
yarn start
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

- The page will automatically reload if you make changes to the code.
- You will see build errors and lint warnings in the console.

## Testing

```
yarn test
```

`create-react-app` comes with built-in support for `jest`.

## Production

```
yarn build
```

Builds the app for production to the `build` folder.

## How to use it

Fuzzy Search is composed of two inputs and a table showing the results.

- **First** You should writter in the second input `Keys`, what properties do you want to search in the Example: `amount, date`.
- **Second** You write in the input first `Seach` what you want to find.

#### Description

- In the first input `Search` is where you write what you want to find.

- The second input `Keys` is the list of properties that will be searched.

- In the table shows the results order by date, If one of the two fields is empty it will show all the elements.

These elements are loaded when the system is started:

```jxs
const transactions = [
  { amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
  { amount: 0.45, date: '01-12-2017T9:36', card_last_four: '4434' },
  { amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' },
  { amount: 7774.32, date: '17-07-2017T03:34', card_last_four: '6051' },
  { amount: 1345.98, date: '22-06-2017T10:33', card_last_four: '0059' },
  { amount: 2850.70, date: '27-01-2018T12:34', card_last_four: '4444' },
  { amount: 45.00, date: '10-02-2018T02:34', card_last_four: '0110' },
  { amount: 1.00, date: '17-02-2018T18:34', card_last_four: '1669' },
  { amount: 4.69, date: '01-02-2018T02:34', card_last_four: '8488' },
  { amount: 1111.11, date: '15-01-2018T21:34', card_last_four: '9912' }
];
```

## Linting

`create-react-app` uses [eslint](https://eslint.org/) to provide _"a minimal set of rules that find common mistakes"_. It doesn't try to enforce stylistic rules, allowing us to format with `prettier` (see below). While in development, `eslint` will output any errors in your terminal.

`eslint` has [integrations](https://eslint.org/docs/user-guide/integrations#editors) with a few editors/IDEs. In order for these plugins to work, an `.eslintrc` file must be present at the root of the project. Read the `create-react-app` [docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor) for more information.

## Formatting

Fuzzy uses [prettier](https://github.com/prettier/prettier), an opinionated code formatter for JavaScript, CSS and JSON. The formatting occurs before each commit you make, and only formats files that are staged.

```
 "scripts": {
    ...
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.{js,jsx,json,css}": [
      "prettier --write",
      "git add"
    ]
  }
```

Fuzzy uses [husky](https://github.com/typicode/husky) to create the `precommit` hook and [lint-staged](https://github.com/okonet/lint-staged) to run specific commands on staged files that match the file glob. Check out the `create-react-app` [docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically) for more info.
