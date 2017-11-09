var package_fav = require('../package.json');
	

exports.home = function (req, res) {
	res.render('home', {
		titulo: 'Smath Labs School App | Watson @ School',
		favicon: package_fav.favicon,
	});
};



exports.notFound = function(req,res) {
	res.render('error_page', {
		title: 'Title goes here',
		favicon: package_fav.favicon,
	});
};
