const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: [
        "./src/index.tsx"
    ],

    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: "/",
    },

    module: {
        rules: [
            {
                test: /\.(jsx|tsx|js|ts)$/,
                include: [
                    path.resolve(__dirname, "./src"),
                ],
                use: "babel-loader",
            },
        ],
    },

    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/favicon.ico",
            hash: true,
            template: "./src/index.ejs",
        }),
    ],

    devServer: {
        historyApiFallback: true,
        https: false,
        host: "pp20.vendor.ru",
        hotOnly: true,
        open: true,
        port: 80,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {'^/api' : ''}
            }
        }
    },
};
