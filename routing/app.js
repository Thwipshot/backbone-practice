var FirstView = Backbone.View.extend({
  render: function() {
    this.$el.html("This is view one like what would load on the first page");
    return this;
  }
});

var SecondView = Backbone.View.extend({
  render: function() {
    this.$el.html("A secondary view that is like what would be shown when you click on a button or so to navigate to another view");
    return this;
  }
});

var $appContainer = $("#app");

var firstView = new FirstView( { el: $appContainer } );
var secondView = new SecondView( { el: $appContainer } );

var AppRoutes = Backbone.Router.extend({
  routes: {
    "first-view": "first",
    "second-view": "second"
  },

  first: function() {
    $appContainer.empty().append(firstView.render().el);
  },
  second: function() {
    $appContainer.empty().append(secondView.render().el);
  }
});

var routes = new AppRoutes();
Backbone.history.start();
