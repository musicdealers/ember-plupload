/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-plupload',

  included: function (app) {
    this._super.included(app);
    app.import('bower_components/plupload/js/moxie.js');
    app.import('bower_components/plupload/js/plupload.dev.js');
    app.import('bower_components/plupload/js/Moxie.swf', {
      destDir: 'assets'
    });
    app.import('bower_components/plupload/js/Moxie.xap', {
      destDir: 'assets'
    });
    app.import('bower_components/dinosheets/dist/dinosheets.amd.js', {
      exports: {
        'dinosheets': ['default']
      }
    });

    app.import('vendor/styles/ember-plupload.css');
  }
};
