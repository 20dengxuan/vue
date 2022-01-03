const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    // 打包入口
    entry: './src/main.js',
    mode: 'development',
    // 打包出口
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 开发时快速定位到出错的源代码行
    devtool: 'inline-source-map',
    module: {
       rules: [
        //    vue文件打包规则
           {
               test:/\.vue$/,
               loader: 'vue-loader'
           },
        //    打包图片
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
        //    打包小于2048字节的图片
           {
               test: '/\.(png|jpeg|png|svg)/',
               loader: 'url-loader',
               options: {
                   name: '[name].[ext]',
                   limit: 2048
               }
           },
        //    打包css文件  postcss-loader添加浏览器前缀
           {
               test:/\.css$/,
               use: ['style-loader','css-loader','postcss-loader']
           },
        //    css预处理
           {
               test:/\.less$/,
               use:['style-loader','css-loader','postcss-loader','less-loader']
           },
        //   es6转es5
           {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
           }
       ]
    },
    plugins: [
        // vue打包插件
        new VueLoaderPlugin(),
        // 生成html模板
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        // 打包前清空dist文件夹
        new CleanWebpackPlugin(),
        // 模块热替换
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        // 指定服务器根目录
        static:'./dist',
        // 自动打开浏览器
        open:true,
        // 启用热模块替换
        hot: true
    }
}