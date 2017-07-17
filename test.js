const readUrl = require('./index.js')
const log = require('node-time-log').SimpleLog;

readUrl
	.promise('https://raw.githubusercontent.com/cesarferreira/dryrun/master/LICENSE')
		.then(response => {
			log(response);
		})
		.catch(err => {
			log(err);
});
