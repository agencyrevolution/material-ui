var scaffoldStyle= {
	primaryColor: 'green',
	getRaisedButtonStyles: function() {
		return {
			color: this.primaryColor
		};
	},
	update: function(obj) {
		this.primaryColor = obj.primaryColor;
	}
};

module.exports = scaffoldStyle;

