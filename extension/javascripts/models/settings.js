Settings = Backbone.Model.extend({
  defaults: {
    timeGrouping: 15,
    domainGrouping: true
  },

  timeGrouping: function() {
    return parseInt(this.get('timeGrouping'), 10);
  },

  sync: function(method, model, options) {
    if(method === 'create') {
      localStorage.settings = JSON.stringify(this);
      options.success(this);
    } else if(method === 'read') {
      var parsedSettings = {};
      if(localStorage.settings) parsedSettings = JSON.parse(localStorage.settings);
      options.success(parsedSettings);
    }
  },

  parse: function(data) {
    this.set(data);
  }
});
