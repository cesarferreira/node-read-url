const readUrl = require('./index.js');

readUrl
	.promise('https://raw.githubusercontent.com/cesarferreira/dryrun/master/LICENSE')
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
