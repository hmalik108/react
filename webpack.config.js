var webpack = require('webpack');


module.exports = {
	//tell where to process the code
	entry: [
		'./src/index.jsx'
	],
	//specify the output
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	//take extension array
	resolve: {
		root: __dirname,
		modulesDirectories:[
			'node_modules',
			'node_modules/bootstrap/dist/css',
			'./src/components' //Folder to look at for auto-alias
		],
		alias: {
			RBS: 'react-bootstrap/lib',
			applicationStyles: 'src/styles/app.less',
			Main: 'src/components/Main.jsx',
			Header: 'src/components/Header.jsx',
			NavigationBar: 'src/components/NavigationBar.jsx',
			AppBreadcrumbs: 'src/components/AppBreadcrumbs.jsx',
			Home: 'src/components/Home.jsx',
			Logout: 'src/components/Logout.jsx',

			MessageModal: 'src/components/Utils/MessageModal.jsx'



		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs']
				},
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.css$/,
        loader: "style-loader!css-loader"
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url"
			}

		],
		rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }
    ]
	}
}
