Backbone.EasyView = Backbone.View.extend
	render: ->
		tplSource = $(@options.template).html()
		tpl = _.template tplSource
		@$el.html tpl @options.model.toJSON()
