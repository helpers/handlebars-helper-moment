/*
 * Handlebars Helper: Moment.js
 * @author: https://github.com/Arkkimaagi
 * Built for Assemble: the static site generator and
 * component builder for Node.js, Grunt.js and Yeoman.
 * http://assemble.io
 *
 * Copyright (c) 2014, Brian Woodward, Jon Schlinkert
 * Licensed under the MIT license.
 */

/*jshint node:true */
module.exports = function (config) {
  var helpers = {};
  var moment  = require('moment');
  var _       = require('lodash');

  helpers.moment = function(context, block) {
    if (context && context.hash) {
      block = _.cloneDeep(context);
      context = undefined;
    }
    var date = moment(context);

    // Reset the language back to default before doing anything else
    date.lang('en');

    for (var i in block.hash) {
      if (date[i]) {
        date = date[i](block.hash[i]);
      } else {
        console.log('moment.js does not support "' + i + '"');
      }
    }
    return date;
  };

  helpers.duration = function(context, block) {
    if (context && context.hash) {
      block = _.cloneDeep(context);
      context = 0;
    }
    var duration = moment.duration(context);

    // Reset the language back to default before doing anything else
    duration = duration.lang('en');

    for (var i in block.hash) {
      if (duration[i]) {
        duration = duration[i](block.hash[i]);
      } else {
        console.log('moment.js duration does not support "' + i + '"');
      }
    }
    return duration;
  };

  return helpers;
};
