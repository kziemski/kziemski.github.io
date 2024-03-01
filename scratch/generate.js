'use strict';

var theme = require('jsonresume-theme-eloquent-mod');

var resume = require('../src/data/resume.json');
process.stdout.write(theme.render(resume));