const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('../webpack/paths');

module.exports = {
    entry: commonPaths.entryPath,
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: `${commonPaths.jsFolder}/[name].[hash].js`,
        path: commonPaths.outputPath,
        chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: commonPaths.templatePath
        })
    ]
};
