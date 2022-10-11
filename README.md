# @cobra/parcel-transformer-handlebars

Transform handlebars templates to HTML, enhanced with (handlebars-layouts)[https://www.npmjs.com/package/handlebars-layouts], (handlebars-helpers)[https://www.npmjs.com/package/handlebars-helpers] and (front-matter)[https://www.npmjs.com/package/front-matter].

## Installation
```
npm install -D @jmilanes/parcel-transformer-handlebars-revamped
```

## Usage
Add it to your `.parcelrc`:

```
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "*.hbs": ["@jmilanes/parcel-transformer-handlebars"],
  },
}
```

## Project Structure

By default, this plugin expects your folder structure to be as follows:

```
- src
  - dada/*.{json,js}
  - helpers/**/*.js
  - layouts/**/*.{hbs,handlebars}
  - partials/**/*.{hbs,handlebars}
```

## Configuration

You can customize the location of your handlebars files and extensions by adding a configuration file the root of our project, this file can be one of the following:

1. `hbs.config.json`
2. `handlebars.config.json`,
3. `.hbsrc`
4. `.handlebarsrc`

Configuration example:

```json
{
    "data": "src/data/**/*.{json,js}",
    "helpers": "src/helpers/**/*.js",
    "layouts": "src/layouts/**/*.{hbs,html}",
    "partials": "src/partials/**/*.{hbs,html}",
}
```

That's it, create your html files using Handlebars and parcel will compile tham to `.html`.

## LICENSE

```LICENSE
The MIT License (MIT)

Copyright (c) 2021 Ecor Ventures LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```