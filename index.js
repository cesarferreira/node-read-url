'use strict';

const pkg = require('./package.json');
const log = require('node-time-log').SimpleLog;
const fs = require('fs');
var request = require('request');

module.exports = {
	promise: (url) => {
		return new Promise((resolve, reject) => {
			request.get(url, (error, response, body) => {
				if (!error && response.statusCode == 200) {
						resolve(body);
				} else {
					reject(error);
				}
			});
		})
}};


// const fs = require('fs');
// const got = require('got');

// got('todomvc.com')
// 	.then(response => {
// 		console.log(response.body);
// 		//=> '<!doctype html> ...'
// 	})
// 	.catch(error => {
// 		console.log(error.response.body);
// 		//=> 'Internal server error ...'
// 	});