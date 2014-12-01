module.exports = {
	afterInstall: function() {
		return this.addBowerPackageToProject('iCheck');
	}
};