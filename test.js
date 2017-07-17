const readUrl = require('./index.js')

readUrl
	.promise('https://raw.githubusercontent.com/cesarferreira/dryrun/master/LICENSE')
		.then(response => {
			log(response);
		})
		.catch(err => {
			log(err);
		});
