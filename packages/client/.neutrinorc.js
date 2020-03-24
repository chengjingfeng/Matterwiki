const react = require('@neutrinojs/react')
const jest = require('@neutrinojs/jest')
const devServer = require('@neutrinojs/dev-server')

module.exports = {
    options: {
        root: __dirname,
        output: 'dist',
    },
    use: [
        react({
            html: {
                title: 'Matterwiki',
            },
        }),
        jest(),
        devServer({
            port: 3000,
            overlay: true,
            hot: true,
            liveReload: false,
            watchContentBase: true,
            proxy: {
                '/api/': { target: 'http://localhost:5000/' },
            },
            stats: {
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false,
            },
        }),
    ],
}
