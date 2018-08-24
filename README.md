# Process:
1. installed vue-cli (sudo npm install -g vue-cli)
2. Initiated a webpack (vue init webpack lastminute-state). This webpack helps setting up a Vue project, allowing to build separate components (header, footer, graph etc) and bundle them together after completion. Webpack also helps to minify the code so it runs faster.
3. Installed extra npm packages: axios (for pulling data from an API), and chart.js + vue-chartjs for creating graphs within Vue
4. “npm run dev” allowed me to build to project (through webpack) and run it on “http://localhost:8080”
5. I did manage to pull actual data from a weather api (temperature, description of the weather). For the graph I generated random numbers, because I was experiencing difficulties with finding a good API for this purpose.
6. Installed the “bootstrap-vue” npm and integrated the design of Collin (built with Bootstrap Vue)

# Instructions for Lloyd / Lindsey:
1. cd into folder where the files are unzipped
2. make sure that “webpack-dev-server” is installed, else type: ‘npm install webpack-dev-server -g’
3. type ‘npm run dev’
4. the application can be found on http://localhost:8080

Test is by typing in “Amsterdam” (or any other city in the world) and click on “get information” to see the weather info + graph rendered by Vue.js

# lastminute-stats

> A Vue.js project

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
