const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

function appRoot(relativePath) {
    return path.resolve(__dirname, "frontend", relativePath);
}

const aliases = {
    "@components": appRoot("components"),
    "@styles": appRoot("assets/theme"),
};


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: '[name].bundle.js',

    },

    resolve: {
        alias: aliases,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sa       test: /\.css$/,
                    //            ss to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: "file-loader",
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    devServer: {
        historyApiFallback: true,
        proxy: {
            "/**/**/**": {
                target: "http://polar-caverns-70793.herokuapp.com",
                changeOrigin: true
            }
        },
    }
};


