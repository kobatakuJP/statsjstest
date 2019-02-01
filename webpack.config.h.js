module.exports = {
    mode: "development",
    entry: "./src/indexH.ts",
    output: {
        filename: "index.js",
        path: __dirname + "/dist"
    },

    resolve: {
        extensions: [".ts", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    }
};