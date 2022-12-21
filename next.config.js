const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.(le|c|sc)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                        lessOptions: {
                            javascriptEnabled: true,
                        },
                    },
                },
            ],
        });

        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].css',
                chunkFilename: 'static/css/[contenthash].css',
            })
        );

        return config;
    },
};

module.exports = nextConfig;
