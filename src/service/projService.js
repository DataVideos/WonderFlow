import axios from "axios";

export function queryProjectSpec(fileName, callback, errorCallBack) {
  let url = './data/project/' + fileName
  axios.get(url)
    .then(rep => {
      callback(rep)
    }).catch(error => {
      errorCallBack(error)
    })
}

export function queryStaticSVG(fileName, callback, errorCallBack) {
  let url = './data/svg/' + fileName
  return axios.get(url)
    .then(rep => {
      callback(rep)
    }).catch(error => {
      errorCallBack(error)
    })
}

export function querySampleFile(fileName, callback, errorCallBack) {
  let url = './data/spec/' + fileName
  return axios.get(url)
    .then(rep => {
      callback(rep)
    }).catch(error => {
      errorCallBack(error)
    })
}

export function queryTranscript(fileName, callback, errorCallBack) {
  let url = './data/transcript/' + fileName
  return axios.get(url)
    .then(rep => {
      callback(rep)
    }).catch(error => {
      errorCallBack(error)
    })
}

export function queryStaticAudio(fileName, callback, errorCallBack){
  let url = './data/audio/' + fileName
  return axios.get(url)
      .then(rep => {
        callback(rep)
      }).catch(error => {
    errorCallBack(error)
  })
}

export function queryTargetModel(fileName, callback, errorCallBack) {
  let url = './data/target-v2/' + fileName
  return axios.get(url)
    .then(rep => {
      callback(rep)
    }).catch(error => {
      errorCallBack(error)
    })
}

export function queryLinking(fileName, callback, errorCallBack) {
  let url = './data/linking/' + fileName
  return axios.get(url)
    .then(rep => {
      callback(rep)
    }).catch(error => {
      errorCallBack(error)
    })
}

export function queryInsights(fileName, callback, errorCallBack) {
  let url = './data/insight/' + fileName
  return axios.get(url)
    .then(rep => {
      callback(rep)
    }).catch(error => {
      errorCallBack(error)
    })
}


