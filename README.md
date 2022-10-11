# Parcel Transformer Handlebars Revamped

Transform handlebars templates to HTML, enhanced with [handlebars-layouts](https://www.npmjs.com/package/handlebars-layouts), [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers) and [front-matter](https://www.npmjs.com/package/front-matter).

## Installation

Install with [npm](https://www.npmjs.com/):

```bash
$ npm install --save @jmilanes/parcel-transformer-handlebars-revamped
```

Install with [yarn](https://yarnpkg.com):

```bash
$ yarn add @jmilanes/parcel-transformer-handlebars-revamped
```

## Usage

Add it to your `.parcelrc`:

```
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "*.hbs": ["@jmilanes/parcel-transformer-handlebars-revamped"],
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
2. `handlebars.config.json`
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

## Features

### frontmatter
The plugin has built in support for frontmatter yaml. Processed yaml data will be passed into the templates before compilation. frontmatter yaml data will preferably be at the top of the template file such as the following example:

#### Source - `example.hbs`
```html
---
title: This is a heading
desc: this is a paragraph
names:
  - bob
  - jane
  - mark
---
{{!< mainlayout}}

<h1>{{title}}</h1>
<p>{{desc}}</p>
<ul>
{{#each names}}
  <li>{{this}}</li>
{{/each}}
</ul>
```

#### Output - `example.html`
```html
<html>
  <body>
    <h1>This is a heading</h1>
    <p>this is a paragraph</p>
    <ul>
      <li>bob</li>
      <li>jane</li>
      <li>mark</li>
    </ul>
  </body>
</html>
```

### Handlebars Layouts
The plugin has built in support for [handlebars-layouts](https://www.npmjs.com/package/handlebars-layouts). The [advanced example](https://github.com/TheBlackBolt/parcel-plugin-handlebars/tree/master/examples/advanced) shows how to take advantage of handlebars layouts.
Please refer to their documentation for more information.

### Handlebars Helpers
The plugin is also including all helpers found in the npm package [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers).
Please refer to their documentation for example usages.

### Environment Variables

During compililation the plugin will also pass the following variable(s) to the template:

- NODE_ENV

This can be useful when you want specific code to show up on production builds.

```html
{{#eq NODE_ENV "production"}}
<!-- Production only code -->
{{/eq}}
```

Or perhaps the opposite

```html
{{#isnt NODE_ENV "production"}}
<!-- Development only code -->
{{/isnt}}
```

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