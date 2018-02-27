# Установка Webpack:

1. Устанавливаем глобально
yarn global add webpack
yarn add webpack

2. Устанавлиаем loaders
yarn add  -D babel-core babel-loader babel-preset-env babel-preset-react
babel-preset-stage-0

3. Устанавливаем сам React
yarn add react react-dom

* Загрузчики CSS
yarn add style-loader css-loader postcss-loader

### Конфигурация Webpack

Основные настройки находятся в файле webpack.config.js

```javascript
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: true
        })
    ]
}
```
* `entry` - отвечает за точку входа в приложение
* `output` - отвечает за точку входа в приложение
    * `path` - куда будет выгружаться пакет
    * `filename` - название выгружаемого пакет
    * `sourceMapFilename` - используется для удобного дебагинга в `DevTools` браузера
* `devtool` - включает разметку импортируемых модулей
* `module` - отвечает за подключаемые модули
* `rules` - массив правил, применяемых к модулям
    * `test` - паттерн названий файлов для данного правила
    * `exclude` - исключение из обработки данным правилом
    * `loader` - массив загрузчиков для данного правила
    * `query` - используемые пресеты для данного обработчика
    * `use` - применять список загрузчиков с определенными опциями
* `plugins` - массив дополнительных модулей Webpack

* `webpack.optimize.UglifyJsPlugin` - сжатие js-файлов
