![Protractor, Jasmine and Typescript](./images/protractor-jasmine-typescript.png?raw=true "Protractor, Jasmine and Typescript")

# Protractor, Jasmine and Typescript Setup Guide
This is Test Automation framework designed using Protractor, Jasmine and TypeScript

## Framework Structure
```
├───page-objects                    # This folder contains page object, page helper and page contants
│   ├───common
│   └───pages
│       ├───common
│       └───atata
├───temp                            # This folder contains JS file which are generated after compiling TypeScript files
├───test-results                    # This folder contains test result (includes html report and screenshots)
└───test-suites                     # This folder contains spec/test files
```

## To Get Started

### Pre-requisites
* Download and install Chrome or Firefox browser.
* Download and install Node.js:
  * [Install Node.JS](https://nodejs.org/en/download/)
* Optional - Download and install any Text Editor like Visual Code/Sublime/Brackets
  * [Install Visual Studio Code](https://qaloop.tk/blog/install-visual-studio-code/ "Install Visual Studio Code")


### Setup Scripts 
* Clone the repository into a folder
* Install Protractor: `npm install -g protractor`
* Update necessary binaries of webdriver-manager: `webdriver-manager update` or `npm install -g webdriver-manager`
* Go to Project root directory and install Dependency: `npm install` and `node_modules/.bin/webdriver-manager start`
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

 

### How to Run Test
* Run complete Test Suite: `npm test`

 
