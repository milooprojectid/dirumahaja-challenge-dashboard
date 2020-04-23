## Requirements
* node > `10.16.1`
* npm > `6.9.0`

## Configuration (Local Machine)
- Copy Environment configuration file from .env.example to .env
```bash
$ cp .env.example .env
```
- Modify it based on your configuration preference

## Getting Started
After confirming that your development environment meets the specified [requirements](#requirements),
you can start the site by running these commands:

$ install yarn
https://classic.yarnpkg.com/en/docs/install#mac-stable

```bash
$ yarn install                   # Install project dependencies
$ yarn start                     # Compile and launch
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start` |Serves your app at `localhost:3000`. HMR will be enabled and `client.css` file will not be generated.|
|`build`|Compiles the application to disk (`~/build` by default).|
|`serve` |Serves your builded app at `localhost:3000`.|
|`test`|Runs all tests in sequence|

## Branches
There are following branches used in project:
* `master` that is what is running on production server
* `devel` is always on top of `master` (fast-forward) and that is branch you should fork when you start working on a new feature
That is also the branch you should rebase onto daily while you are working on your feature.
* `feature/*` each feature may have it's own branch and that branch may be deployed somewhere for testing as well.

## File and Folder naming convention
* React JS or JSX or Javascript Class shoud be named Pascal case, for example - OrderDetailPanel.jsx
* Js files should be named in camel case, for example - verifyPhone.js
* folder names should be all in small letters, if it's more than a word, then they should be seperated by -, for example -> core-library,
But if the folder is behave as React component index container then it should use Pascal case.