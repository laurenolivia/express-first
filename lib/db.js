var mysql=require('mysql');
var connection=mysql.createConnection({
	host:'localhost',
	user: 'lauren.burwell',
	password: 'your password',
	database: 'leeds_new'
});

connection.connect(function(error) {
	if(!!error) {
		console.log(error);
	}else {
		console.log('Connected!');
	}
});

module.exports = connection;

