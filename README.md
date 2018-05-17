
# zpcube_vue

> '正品vue cube-ui 框架’

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

show demo
![avatar](data:image/png;base64,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)

