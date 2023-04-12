const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://localhost:7043',
                changeOrigin: true,
                secure: false,
            }
        }
    }
})
