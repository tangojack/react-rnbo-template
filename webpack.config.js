const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|json)$/,
                exclude: path.join(__dirname, 'node_modules'),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                },
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
    ],
}