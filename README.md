# WonderFlow

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deployment

Before building a distribution:

For all video elements with class `local-video`, attribute `src` should be changed from absolute path to relative path by add a dot `.`. Otherwise, the video won't be loaded correctly.
