'use strict';
const got = require('got');

module.exports = {
	promise: url => {
		return new Promise((resolve, reject) => {
			got(url)
				.then(response => {
					resolve(response.body);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
};
