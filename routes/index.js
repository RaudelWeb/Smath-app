var package_fav = require('../package.json');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
	dd = '0'+dd
}

if(mm<10) {
	mm = '0'+mm
}

today = dd + '/' + mm + '/' + yyyy;


exports.home = function (req, res) {
	res.render('home', {
		titulo: 'Smath Labs School App | Watson @ School',
		favicon: package_fav.favicon,
		profile_img: package_fav.profile,
		date : today,
	});

};



exports.notFound = function(req,res) {
	res.render('error_page', {
		title: 'Title goes here',
		favicon: package_fav.favicon,
	});
};
