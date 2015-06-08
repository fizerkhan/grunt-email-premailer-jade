# Email Templates

Designing and testing emails is a pain. HTML tables, inline CSS and varying support for the latest web standards.

Moreover writing content inside pure HTML is pain. If you have more emails,
then most of time you endup updating all files for header, footer and common styles.
So we uses Jade template to solve this problem.


This grunt task helps simplify things at the design stage.

1. Compiles your SCSS to CSS

2. Compile your Jade to HTML

3. Inlines your CSS


## Requirements

* Node.js
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Ruby - [Install ruby with RVM](https://rvm.io/rvm/install)
* Premailer (`gem install premailer hpricot nokogiri`) - Inlines the CSS


## Getting started

1. Install grunt packages only once

    npm install

2. Build and Watch

    grunt watch

To build without watch

    grunt

The inlined email can be found at `/inlined` folder.

## Kudos:

* [Mailgun Templats](https://github.com/mailgun/transactional-email-templates)
* [Grunt Email Workflow from leemunroe](https://github.com/leemunroe/grunt-email-workflow)
