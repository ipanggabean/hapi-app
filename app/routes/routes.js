var treeFormat = require('../controllers/api/treeformat')

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return '<h1>Hello World!</h1>';
		},
	},
	{
		method: 'POST',
		path: '/tree',
		handler: treeFormat,
	},
	{
		method: 'GET',
		path: '/{any*}',
		handler: (request, h) => {
			return h.response("Page not found").code(404);
		},
	},
]