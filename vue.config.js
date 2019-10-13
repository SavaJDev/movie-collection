let isProd = process.env.NODE_ENV === 'production';
let path = require('path');

let config = {
	productionSourceMap: false,
	configureWebpack: config => {
		return {
			devServer: {
				historyApiFallback: true,
				overlay: true,
				proxy: {
					'/3': {
						target: 'https://api.themoviedb.org',
						secure: false,
						changeOrigin: true
					}
				}
			},
			resolve: {
				alias: {
					'~': path.resolve(__dirname, 'src')
				}
			}
		}
	}
};

module.exports = config;