const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    stats : "none",
    entry : {
        index : "./src/index.js",
        vendor : ["vue"]
    },
    output : {
        path : __dirname + "/dist",
        filename : "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                'vue-style-loader',
                'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template : "./src/index.html",
            cache : true,
            showErrors : true
        }),
    ],
    optimization : {
        splitChunks :{
            cacheGroups : {
                vendor : {
                    // test: /[\\/]node_modules[\\/](vue|css-loader|axios|vue-router)[\\/]/,
                    test: /[\\/]node_modules[\\/](vue|buefy|axios|vue-router)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    devServer: {
        hot : true,
        compress : true,
        port : 8080
    }
}