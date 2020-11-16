const path = require('path');
const HTML_webpack_plugin = require('html-webpack-plugin');
const Css_webpack_plugin = require('mini-css-extract-plugin');

const HTMLPlugin = new HTML_webpack_plugin({
    filename: 'index.html',
    favicon: path.resolve(__dirname,'../src/favicon.png'),
    template: path.resolve(__dirname,'../src/index.html'),
    minify: true
})

const CSSPlugin = new Css_webpack_plugin({
    filename: 'main.css'
})

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:  /\.s[ac]ss$/i,
                use: [
                    Css_webpack_plugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        HTMLPlugin,
        CSSPlugin
    ]
}