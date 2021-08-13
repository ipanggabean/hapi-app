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
    path: '/',
    handler: (request, h) => {
			return '<h1>Hello Tree Builder!</h1>';
		},
  },
	{
		method: 'GET',
		path: '/{any*}',
		handler: (request, h) => {
			return '404';
		},
	},
];
