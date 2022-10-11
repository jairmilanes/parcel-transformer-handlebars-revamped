'use strict'

const { Transformer } = require('@parcel/plugin');
const frontMatter = require('front-matter');
const Handlebars = require('handlebars');
const handlebarsWax = require('handlebars-wax');
const handlebarsLayouts = require('handlebars-layouts');
const handlebarsHelpersPackage = require('handlebars-helpers');

module.exports = new Transformer({
  async loadConfig({ config }) {
    const { contents } = await config.getConfig([
      'hbs.config.json',
      'handlebars.config.json',
      '.hbsrc',
      '.handlebarsrc',
    ]);

    return {
      data: 'src/data/**/*.{json,js}',
      decorators: 'src/decorators/**/*.js',
      helpers: 'src/helpers/**/*.js',
      layouts: 'src/layouts/**/*.{hbs,handlebars}',
      partials: 'src/partials/**/*.{hbs,handlebars}',
      ...(contents || {})
    };
  },

  async transform({asset, config}) {
    const handlebars = Handlebars.create();

    handlebarsHelpersPackage({ handlebars });

    const {data, helpers, layouts, partials, partialsOptions} = config;

    const wax = handlebarsWax(handlebars)
      .helpers(handlebarsLayouts)
      .helpers(helpers)
      .data(data)
      .partials(layouts, partialsOptions)
      .partials(partials, partialsOptions);

    const content = await asset.getCode();

    const { attributes, body } = frontMatter(content);

    const { NODE_ENV } = process.env;

    const template = wax.compile(body);

    asset.setCode(template({ NODE_ENV, ...attributes }));

    asset.type = 'html';

    return [asset];
  }
});