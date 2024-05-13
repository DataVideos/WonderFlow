# WonderFlow

This repository contains the deployment of the WonderFlow website (`main` branch) and the source code of the website (`src` branch).

## Project deployment

This project uses `node v16`. To build the project for deployment, switch to the branch `src` then follow the steps below:

### Installs the required packages
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
The changes will be reflected in the browser in real-time.

### Compiles and minifies for production
```
npm run build
```

Then the static website files will be generated in the `dist` folder.
Push the files in the `dist` folder to the `main` branch to deploy the website.