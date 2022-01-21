# Sample Contact Form

### A fully functioning contact form written with React.js

![MIT License badge](https://img.shields.io/badge/license-MIT_License-green)

[![sample-contactform-demo](https://user-images.githubusercontent.com/79285555/150520200-d1fc6c2f-d6fe-493c-a779-19f3346b4fef.gif)](https://anthonypena97.github.io/sample-contactform/)

#### Live Site: https://anthonypena97.github.io/sample-contactform/

<p> ---------------------------------------- </p>

Application written with Javascript, using [React.js](https://reactjs.org/)

[Axios}(https://www.npmjs.com/package/axios) is used for making API calls
[React-Boostrap](https://github.com/markuslerner/THREE.Interactive) is used for additional styling.
[gh-pages](https://www.npmjs.com/package/gh-pages) is used for deployment

## Description

A simple contact form sample using react.js. A user may fill out their information to be able to send a database through an API POST call.

The Users input is validated at each field. 'Name' cannot be left empty, 'Email' must follow a standard email convention by using a RegEx function for checking, 'Birth Date' must be entered in a YYYY-MM-DD format, which is also checked through the use of a RegEx function, the 'Contact Agreement' checkbox must be clicked, and no field can remain empty or invalid before the data is sent over.

The user may also clear the form of any ongoing input or error message with the use of the 'Clear' button.

This page is designed for both Desktop and Mobile user experience.

## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [Notes](#notes)
- [License](#license)
- [Version History](#version)
- [Contributing](#contributing)
- [Questions](#questions)
- [Acknowledgmenets](#acknowledgments)

## Usage

To experience the deployed site, simply visit [Sample Contact Form](https://anthonypena97.github.io/sample-contactform/)

## Installation

To use the codebase for yourself :

- download or clone application
- open terminal in application root directory
- enter,`npm i`
- enter, `npm start` for development
- enter, `npm run deploy` once complete

## License

MIT License

Copyright (c) 2022 Anthony Pena

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation fil (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Version History

- v1.0.0 is latest version
  - - See [commit change](https://github.com/anthonypena97/sample-contactform/commits/main) or See [release history](https://github.com/anthonypena97/sample-contactform/releases)

## Contributing

Please refer to the [Contributor Covenenant](https://www.contributor-covenant.org/) for guidelines on contributing on this project.

## Questions

For any inquiries or questions, please contact Anthony Pena via:

- GitHub: [anthonypena97](https://github.com/anthonypena97)
- Email: <anthony.e.p3na@gmail.com>

## Acknowledgments

Inspiration, code snippets, etc.

- [Date RegEx Validation](https://stackoverflow.com/questions/22061723/regex-date-validation-for-yyyy-mm-dd) by [Vinod](https://stackoverflow.com/users/1120560/vinod)
