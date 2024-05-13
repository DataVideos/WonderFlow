import { SVG } from '@svgdotjs/svg.js'
function annotateSVGUsingInsights(formatInsights, spec, svgStr) {
  const svg = (new DOMParser())
    .parseFromString(svgStr, 'image/svg+xml')
    .querySelector('svg');


  // const domElList = Array.from(svg.querySelectorAll('*:not(g,svg,defs,defs *)')).filter(domEl => domEl.ariaHidden != "true");

  var parentElList = Array.from(svg.querySelectorAll('*')).filter(domEl => domEl.ariaRoleDescription != null);

  const insightDict = {}
  const LineDict = {}
  // eslint-disable-next-line no-unused-vars
  var hasShow = false

  // add annotation
  formatInsights.forEach((insight) => {
    if (['extreme', 'outlier', "proportion", "difference", "rank", 'association', "distribution", 'value'].includes(insight['insightType'].toLowerCase())) {
      insight.insightData.forEach((d) => {
        if (insightDict[d.idx]) {
          insightDict[d.idx].push(insight.subType)
        }
        else {
          insightDict[d.idx] = [insight.subType]
        }
      })
      if(spec.title.includes('elephone') || spec.title.includes('etaverse')){
        svg.appendChild(addDistributionCircleAnno(svgStr, insight.subType, spec.title))
      }
    }
    else if(insight['insightType'].toLowerCase() === 'trend'){
      // annotate
      if(spec.type === 'bar'){
        var refBar = parentElList[parentElList.findIndex(p => p.id === `bar-${insight.insightData[0].idx}`)]
        svg.appendChild(addTrendArrowAnno(insight.subType, refBar, spec.title))
      }
      else if(spec.type === 'line'){
        var refPoint = parentElList[parentElList.findIndex(p => p.id === `point-${insight.insightData[insight.insightData.length-1].idx}`)]
        console.log(refPoint)
        svg.appendChild(addTrendArrowAnno(insight.subType, refPoint, spec.title))
        insight.insightData.forEach((d) => {
          if (insightDict[d.idx]) {
              insightDict[d.idx].push(insight.subType)
          }
          else {
            insightDict[d.idx] = [insight.subType]
          }
          if(LineDict[Math.floor(d.idx/spec.column)]){
            LineDict[Math.floor(d.idx/spec.column)].push(insight.subType)
          }
          else {
            LineDict[Math.floor(d.idx/spec.column)]= [insight.subType]
          }
        })
      }
    }
    else if(insight['insightType'].toLowerCase() === 'aggregation'){
      // annotate text
      if(spec.type === 'pie'){
        var refSec = parentElList[parentElList.findIndex(p => p.id === 'sector-0')]
        refSec.parentNode.appendChild(addTextAnno(insight))
      }
    }
    if(insight['insightType'].toLowerCase() === 'distribution' && insight.subType.toLowerCase() !== 'none' && spec.type === 'bar' || insight['insightType'].toLowerCase() === 'difference' && spec.type === 'line' && spec.title.includes('merica') ){
      // annotate
      svg.appendChild(addDistributionCircleAnno(svgStr, insight.subType, spec.title))
    }
    if (insight['insightType'] === 'show') {
      hasShow = true
    }
  })
  console.log(insightDict)

  parentElList.forEach(domEl => {
    var idx = getIDIdx(domEl.id);
    switch (domEl.classList[domEl.classList.length - 1]) {
      case 'bar':
      case 'bar-label':
        // console.log(domEl.id)
        if (insightDict[idx] && spec.type === 'bar') {
          insightDict[idx].forEach((subType) => {
            domEl.classList.add(subType.toLowerCase());
          })
        }
        // console.log(domEl.classList)
        break;
      case 'sector':
        // console.log(getSvgFanCenter(domEl))
        if (insightDict[idx]) {
          insightDict[idx].forEach((subType) => {
            domEl.classList.add(`${subType.toLowerCase()}`);
          })
        }
        // console.log(domEl.classList)
        break;
      case 'sector-label':
        // console.log(domEl.id)
        if (insightDict[idx]) {
          insightDict[idx].forEach((subType) => {
            domEl.classList.add(`${subType.toLowerCase()}`);
          })
        }
        // console.log(domEl.classList)
        break;
      case 'contour':
        if (insightDict[idx]) {
          insightDict[idx].forEach((subType) => {
            domEl.classList.add(subType.toLowerCase());
          })
        }
        // console.log(domEl.classList)
        break;
      case 'point':
        if (insightDict[idx]) {
          insightDict[idx].forEach((subType) => {
            domEl.classList.add(subType.toLowerCase());
          })
        }
        // console.log(domEl.classList)
        break;
      case 'line':
        if (LineDict[idx]) {
          LineDict[idx].forEach((subType) => {
            domEl.classList.add(subType.toLowerCase());
          })
        }
        break;
    }
  })
  const newSvgStr = domElToString(svg);
  return {svgstr: newSvgStr, dict: insightDict}
}

function addTrendArrowAnno(subtype, ref, title){
  let posIncrease = [100, 220]
  let posDecrease = [300, 200]
  let posFluctuate = [400, 100]
  if(title.includes('elephone')) {
    posIncrease = [450, 120]
    posDecrease = [450, 220]
  }
  else if(title.includes('Nuclear')) {
    posIncrease = [100, 100]
    posDecrease = [300, 200]
  }
  else if(title.includes('etaverse')) {
    posIncrease = [680, 120]
  }
  else if(title.includes('airports')) {
    posIncrease = [680, 120]
    posDecrease = [680, 220]
  }
  else if(title.includes('Qatar')) {
    posIncrease = [750, 80]
    posDecrease = [750, 150]
  }
  else if(title.includes('merica')) {
    posIncrease = [100, 230]
    posFluctuate = [400, 100]
  }
  else if(title.includes('eath')) {
    posIncrease = [600, 50]
  }
  if(subtype === 'increase' || subtype === 'fluctuate_increase' ) {
    const increaseAnno = SVG().path('M20.5 7.5L13 15l-4-4-6 6M16 7h4.95v5')
        .move(posIncrease[0], posIncrease[1])
        .scale(2, posIncrease[0], posIncrease[1])
        .fill('none')
        .stroke({ color: ref.getAttribute('fill'), width: 2})
        .addClass(`${subtype}-annotation`)
        .attr('stroke-linejoin', 'round')
    return (new DOMParser()).parseFromString(increaseAnno.svg(), 'image/svg+xml').firstChild
  }
  else if(subtype === 'decrease' || subtype === 'fluctuate_decrease' ) {
    const decreaseAnno = SVG().path('M20.5 17L13 9.5l-4 4-6-6m13 10h4.95v-5')
        .move(posDecrease[0], posDecrease[1])
        .scale(2, posDecrease[0], posDecrease[1])
        .fill('none')
        .stroke({ color: ref.getAttribute('fill'), width: 2})
        .addClass(`${subtype}-annotation`)
        .attr('stroke-linejoin', 'round')
    return (new DOMParser()).parseFromString(decreaseAnno.svg(), 'image/svg+xml').firstChild
  }
  else if(subtype === 'fluctuate') {
    const fluctuateAnno = SVG().path('M3 12h4l3-9 4 18 3-9h4')
        .move(posFluctuate[0], posFluctuate[1])
        .scale(2, posFluctuate[0], posFluctuate[1])
        .fill('none')
        .stroke({ color: ref.getAttribute('fill'), width: 2})
        .addClass(`${subtype}-annotation`)
        .attr('stroke-linejoin', 'round')
    return (new DOMParser()).parseFromString(fluctuateAnno.svg(), 'image/svg+xml').firstChild
  }
}

function addTextAnno(insight) {
  const pos = [58, 100]
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", pos[0]);
  text.setAttribute("y", pos[1]);
  text.setAttribute("font-size", "14");
  text.setAttribute("fill", "#ff0066");
  text.setAttribute("font-family", "Inconsolata");
  text.setAttribute("class", insight.subType);
  text.textContent = insight.subType + ": " + insight.value;
  return text
}

function addDistributionCircleAnno(svgStr, subtype, title) {
  const svgJs = SVG().svg(svgStr).children()[0]
  const pos = [svgJs.bbox().w/2, svgJs.bbox().h/2]
  console.log(pos, svgJs.bbox())
  var distributionAnno = SVG()
        .rect(pos[0]*1.5, 1.5*pos[1])
        .radius(50)
        .move(pos[0]*0.25, pos[1]*0.5)
        .fill('none')
        .stroke({ color: "#f06", width: 5})
        .addClass(`${subtype}-annotation`)
  if(title.includes('elephone')){
    distributionAnno = SVG()
        .rect(pos[0]*1.5, 1.5*pos[1])
        .radius(50)
        .move(pos[0]*0.1, pos[1]*0.4)
        .fill('none')
        .stroke({ color: "#f06", width: 5})
        .addClass(`${subtype}-annotation`)
  }
  else if(title.includes('etaverse')){
    distributionAnno = SVG()
        .rect(pos[0]*1.5, 1.5*pos[1])
        .radius(50)
        .move(pos[0]*0.28, pos[1]*0.2)
        .fill('none')
        .stroke({ color: "#f06", width: 5})
        .addClass(`${subtype}-annotation`)
  }
  else if(title.includes('merica')){
    distributionAnno = SVG()
        .rect(pos[0]*1.8, 1.5*pos[1])
        .radius(50)
        .move(pos[0]*0.15, pos[1]*0.3)
        .fill('none')
        .stroke({ color: "#f06", width: 5})
        .addClass(`${subtype}-annotation`)
  }
  return (new DOMParser()).parseFromString(distributionAnno.svg(), 'image/svg+xml').firstChild
}

function getIDIdx(id) {
  let split = id.split('-')
  return parseInt(split[split.length - 1])
}

function domElToString(domEl) {
  const tmp = document.createElement("div");
  tmp.appendChild(domEl);
  return tmp.innerHTML;
}

export const VegaSVGUtils = {
  annotateSVGUsingInsights
}
