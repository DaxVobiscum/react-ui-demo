module.exports = {
    output: {
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "babel-preset-env",
                            "babel-preset-react"
                        ]
                    }
                }
            }
        ]
    },
    devtool: "sourcemap"
};