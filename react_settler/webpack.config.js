var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildPath = path.resolve(__dirname, "build");

module.exports = {
    // Change to your "entry-point".
    entry: "./src/index",
    output: {
        path: buildPath,
        filename: "app[name].bundle.js",
        clean: true,

    },
    cache: false,
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".png"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Mailbox Admin UI",
        }),
    ],
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // For newer versions of Webpack it should be
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/gbr/[name].[ext]'
                }
            }
        ],
    },
    devServer: {
        static: buildPath,
    },
};
