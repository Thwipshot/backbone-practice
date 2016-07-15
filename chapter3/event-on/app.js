if (window.Example === undefined) { window.Example = {}; }

(function(context) {
  // Let use create an object 'myValue' and extending it with the Backbone.Events method

  var myValue = _.extend({name:'Hi everybody!!!'}, Backbone.Events);

  //The method "on()" will bind the callback function to the object and invoke enever an event is triggered

  myValue.on('myFunction', function() {
    document.write("The value triggered is: ");

    document.write(this.name); //The name will be shown once the current object has been triggered.
  });

  myValue.trigger('myFunction');

})(window.Example);
