// Generated by CoffeeScript 1.5.0
(function() {

  Backbone.EasyView = Backbone.View.extend({
    render: function() {
      var tpl, tplSource;
      tplSource = $(this.options.template).html();
      tpl = _.template(tplSource);
      return this.$el.html(tpl(this.options.model.toJSON()));
    }
  });

}).call(this);