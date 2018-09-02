
module.exports = {
    devServer: {
        proxy: {
            '/ranking': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true
            },
            '/book': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true
            },
            '/mix-atoc': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true
            },
            '/chapter': {
                target: 'http://chapter2.zhuishushenqi.com',
                changeOrigin: true
            },
            '/cats': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true
            }
        }
    }
}