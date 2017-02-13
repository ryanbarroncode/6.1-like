var Backbone = require('backbone');

var Like = Backbone.Model.extend({
defaults: {
  "number": 0
},

incrementNumber: function(){
  this.set('number', this.get('number') +1)// this.set starts by grabbing the default number 0 and adds 1 to it. every time you click the like button the event listener runs this function and adds 1.
  console.log(this.get('number')); //work to do : incrementNumber by +1 and update the dom.
  }
});

module.exports = {
  "Like": Like
}
