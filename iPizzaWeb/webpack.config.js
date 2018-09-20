const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => {
    const isProducton = env === 'production';
    const CSSExtarct = new ExtractTextPlugin('styles.css');

    return  {
        entry: './src/app.js',
        output: {
            path: path.join( __dirname, 'public', 'dist') ,
            filename: 'bundle.js'
        },
        module: {
                rules:[
                    {
                        loader: 'babel-loader',
                        test: /\.js$/,
                        exclude: /node_modules/
                    },
                    {
                        use: CSSExtarct.extract({
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ]
                        }),
                        test: /\.s?css$/
                    }
                ]
        },
        plugins: [
            CSSExtarct
        ],
        devtool: isProducton ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join( __dirname, 'public'),
            historyApiFallback: true,
            port:3030,
            publicPath: '/dist/'
        }
    }; 
};

