var Surfboard = Backbone.Model.extend({
  defaults: {
    manufacturer: '',
    model: '',
    stock: ''
  }
});

var SurfboardsCollection = Backbone.Collection.extend({
  model: Surfboard
});

var board1 = Surfboard({
  manufacturer: 'Channel Islands',
  model: 'Whip',
  stock: '12'
});

var board2 = new Surfboard({
  manufacturer: 'Lost',
  model: 'Sub Scorcher',
  stock: 9
});

var board3 = new Surfboard({
  manufacturer: 'Firewire',
  model: 'Spitfire',
  stock: '5'
});

var Surfboards = new SurfboardsCollection;
Surfboards.add(board1);
Surfboards.add(board2);
Surfboards.add(board3);

Surfboards.each(function(surfboard) {
  $('#table-body').append(
    '<tr>' +
      '<td>' + surfboard.get('manufacturer') + '</td>' +
      '<td>' + surfboard.get('model') + '</td>' +
      '<td>' + surfboard.get('stock') + '</td>' +
    '</tr>'
  );
});

var SurfboardsView = Backbone.View.extend({
  el: '#table-body',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.el.html('');

    Surfboards.each(function(model) {
      var surfboard = new SurfboardView({
        model: model,
      });

      this.$el.append(surfboard.render().el);
    }).bind(this);

    return this;
  }
});

var SurfboardView = new Backbone.View.extend({
  tagname: 'tr',

  template: _.template($('#surfboard-template').html()),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var app = new SurfboardsView;
