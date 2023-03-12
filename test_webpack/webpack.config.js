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
        extensions: [".ts", ".tsx", ".js", ".json", ".css"],
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
        ],
    },
    optimization: {
        chunkIds: false,
        concatenateModules: false,
        emitOnErrors: false,
        flagIncludedChunks: false,
        innerGraph: false,
        mangleExports: false,
        mangleWasmImports: false,
        mergeDuplicateChunks: false,
        minimize: false,
        // moduleIds: false,
        portableRecords: false,
        providedExports: false,
        realContentHash: false,
        removeAvailableModules: false,
        removeEmptyChunks: false,
    },
    devServer: {
        static: buildPath,
    },
};
