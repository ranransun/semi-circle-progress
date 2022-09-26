const path = require('path')
module.exports={
    entry:'./src/index.ts',
    output:{
        path:path.resolve(__dirname,"dist"),
      filename: 'index.js',
      libraryTarget: "umd",
      library: 'semi-circle-progress',
    },
    module: {
        rules: [  // 添加解析规则
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {   // 需要打包的文件后缀
        extensions: [".tsx", ".ts", ".js"]
    }
}