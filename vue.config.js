const path = require("path")
const data = require("./src/mock/data")
module.exports={
    configureWebpack:{
        
            resolve: {
                alias: {
                    pages: path.resolve(__dirname, 'src/pages'),
                    http: path.resolve(__dirname, 'src/http'),
                    router: path.resolve(__dirname, 'src/router'),
                    routes: path.resolve(__dirname, 'src/routes'),
                    store: path.resolve(__dirname, 'src/store'),
                    components: path.resolve(__dirname, 'src/components')
                  }
            }
        
    }
}
