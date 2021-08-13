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
		handler: (request, h) => {
			return '<h1>Hello Tree formatter!</h1>';
		},
	},
	{
		method: 'GET',
		path: '/{any*}',
		handler: (request, h) => {
			return '404';
		},
	},
]