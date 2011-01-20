var sys = require('sys');

var View = function(env) {
  if(!this instanceof View) {
    return new View(env);
  }

  this.env = env;

}

View.prototype = {
  events: function() {
    if(this.env.eventString) {
      return this.env.eventString.split(/\s+/);
    }
  },
  
  hasEvent: function(event) {
    this.events().indexOf(event) !== undefined
  }
};

exports.View = View;
