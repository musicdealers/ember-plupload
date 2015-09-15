module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;
    return this.addBowerPackageToProject('musicdealers/plupload#master').then(function () {
      return self.addBowerPackageToProject('dinosheets#0.0.1');
    });
  }
};
