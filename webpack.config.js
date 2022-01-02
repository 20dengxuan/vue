const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
       rules: [
           {
               test:/\.vue$/,
               loader: 'vue-loader'
           },
           {
               test:/\.(png|jpg|gif)/,
               use: [
                   {
                       loader:'file-loader',
                       options: {
                           name: '[name].[ext]'
                       }
                   }
               ]
           },
           {
               test: '/\.(png|jpeg|png|svg)/',
               loader: 'url-loader',
               options: {
                   name: '[name].[ext]',
                   limit: 2048
               }
           },{
               test:/\.css$/,
               use: ['style-loader','css-loader','postcss-loader']
           },{
               test:/\.less$/,
               use:['style-loader','css-loader','postcss-loader','less-loader']
           }
       ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}