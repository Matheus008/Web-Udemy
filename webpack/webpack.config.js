const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TeserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000 
    },
    optimization: {
        minimizer: [
            /*new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),*/ //não está funcionando corretamente substitui para o terser-webpack-plugin
            new TeserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                }
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', // interpreta @import, url()
                    'sass-loader', 
                ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }

    ]
    }
}

// OBS: Caso o optimize não for testar o npm install css-minimizer-webpack-plugin --save-dev