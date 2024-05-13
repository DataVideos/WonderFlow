import { SVG } from '@svgdotjs/svg.js'

function addCircleLineAnno(svg, insight, pattern) {
    const point = svg.find('.mark-symbol path')
    const title = svg.find('.titled')
    console.log(svg, title, point)
    const anno_point = point[pattern.index]
    const annoCircleRadius = svg.bbox().height * 0.2
    const point_group = svg.find('.layer_1_marks')[0]
    console.log(point_group.x())

    console.log(anno_point.attr())

    let annoCenter = [anno_point.x() + anno_point.width() / 2, anno_point.y() + anno_point.height() / 2]

    console.log(annoCircleRadius, annoCenter)
    let anno_dy = svg.bbox().height * 0.2
    let direction = 1

    // direction
    if (annoCenter[1] - svg.bbox().height / 2 > 0) {
        direction = -1
    }
    const anno_group = svg.group({"aria-roledescription": 'annotation'})
    // anno_circle
    anno_group.circle(annoCircleRadius).stroke({ color: '#f06', opacity: 0.5, width: 5 }).fill('none').cx(annoCenter[0]).cy(annoCenter[1] + anno_dy * direction).attr({"aria-roledescription": 'annotation'})
    // anno_text
    anno_group.text("0.5").x(annoCenter[0]).y(annoCenter[1] + anno_dy * direction)
        .font({ size: title.attr()[0]['font-size'], opacity: 0.5, fill: '#f06', family: title.attr()[0]['font'], anchor: 'middle' }).attr({"aria-roledescription": 'annotation'})
    // anno_line
    anno_group.line(annoCenter[0], annoCenter[1] + (anno_dy - annoCircleRadius * 0.5) * direction, annoCenter[0], annoCenter[1]).stroke({ color: '#f06', opacity: 0.5, width: 5, linecap: 'round' }).attr({"aria-roledescription": 'annotation'})
}

function addArrowAnno(svg, data, spec, insight) {

    for(const d of data){
        const elementID = findElement(svg, d, spec)
        if(elementID === ''){
            continue
        }
        const element = svg.find('#' + elementID)[0]
        let textUp = 1
        // console.log(element.y(), svg.bbox().height/2)
        if(element.y() > svg.bbox().height/2){
            textUp = -1.5*textUp
        }
        const originArrowWidth = 20
        svg.path("M12 4V20M12 4L15.5 7.5M12 4L8.5 7.5M12 20L8.5 16.5M12 20L15.5 16.5")
            .scale(1.5, element.x(), element.y())
            .stroke({ color: '#f06', width: 1 })
            .fill('none')
            .move(element.x() - originArrowWidth*0.1,
                  element.y() + textUp*originArrowWidth*(textUp > 0 ? 0.5 : 1))
            .attr({"class": `${insight['insightType'].toLowerCase().replace(' ', '-')} annotation arrow`, "stroke-linecap": "round"})

        const textContent = spec.data[getIDNum(elementID)][spec.y]
        const textLength = textContent.toString().length
        // console.log(textLength)
        svg.text(textContent)
            .x(element.x()-textLength*svg.width()*0.002)
            .y(element.y()+textUp*svg.height()*0.08)
            .font({ size: svg.height()/40, fill: '#f06', family: 'Inconsolata' })
            .attr({"class": `${insight['insightType'].toLowerCase().replace(' ', '-')} annotation text`})
    }

}

function addTrendArrowAnno(svg, data, spec, insight, hasShow) {

    // check the order of points
    const pointID = findElement(svg, data[0], spec)
    console.log(pointID)
    let lineID = 'mark-line-' + Math.floor(getIDNum(pointID)/spec.column)
    if(spec.row === 1){
        lineID = 'mark-line-0'
    }
    console.log(lineID, pointID)

    let line = svg.find('#' + lineID)[0]

    // add marker using dom
    // let size = 3
    // let marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    // marker.setAttribute("id", "arrow");
    // marker.setAttribute("viewBox", `0 0 ${10*size} ${10*size}`);
    // marker.setAttribute("refX", 3*size);
    // marker.setAttribute("refY", 3*size);
    // marker.setAttribute("markerUnits", "strokeWidth");
    // marker.setAttribute("markerWidth", 4*size);
    // marker.setAttribute("markerHeight", 3*size);
    // marker.setAttribute("orient", "auto");
    // console.log(marker)
    // // console.log(svg.element())
    // let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // path.setAttribute("d", `M0,0 L0,${6*size} L${9*size},${3*size}`);
    // path.setAttribute("fill", line.attr('stroke'));
    // marker.appendChild(path);
    // // document.getElementsByClassName("scene")[1].appendChild(marker);
    // console.log(domElToString(marker))
    // svg.svg(domElToString(marker))

    // let arrow_marker = svg.marker(5, 4, function (add) {
    //     add.path('M0,0 V4 L5,2 Z').fill('#ccc')
    // }).id("arrow")
    // console.log(arrow_marker)
    // line.marker('end', arrow_marker)

    // aside arrow

    const point = svg.find('.point')
    const pointStartNum = parseInt(getIDNum(pointID))
    const lastPoint = point[pointStartNum + spec.column-1]
    line.addClass('trend')
    console.log(point)
    for(let i = pointStartNum; i < pointStartNum + spec.column; i++){
        // console.log(point[i])
        point[i].addClass('trend')
    }
    const scale = 2.5
    const originWidth = 20
    const pos = [lastPoint.x()-scale*originWidth/2, lastPoint.y()-originWidth*scale*1.5]
    if(insight['insightWords'].toLowerCase().includes('increas')) {
        // increase
        line.addClass('increase')
        svg.path('M20.5 7.5L13 15l-4-4-6 6M16 7h4.95v5')
        .move(pos[0], pos[1])
        .scale(scale, pos[0], pos[1])
        .fill('none')
        .stroke({ color: line.attr('stroke'), width: 2})
        .addClass('trend-annotation')
    }
    else if(insight['insightWords'].toLowerCase().includes('decreas')){
        line.addClass('decrease')
        svg.path('M20.5 17L13 9.5l-4 4-6-6m13 10h4.95v-5')
        .move(pos[0], pos[1])
        .scale(scale, pos[0], pos[1])
        .fill('none')
        .stroke({ color: line.attr('stroke'), width: 2})
        .addClass('trend-annotation')
    }
    else {
        svg.path('M3 12h4l3-9 4 18 3-9h4')
        .move(pos[0], pos[1])
        .scale(scale, pos[0], pos[1])
        .fill('none')
        .stroke({ color: line.attr('stroke'), width: 2})
        .addClass('trend-annotation')
        line.addClass('fluctuate')
    }
    console.log(hasShow)
    if(hasShow){
        let lineCopy = line.clone()
        lineCopy.removeClass('trend').addClass('destory')
        line.removeClass('line').removeClass('mark')
        svg.add(lineCopy)
    }


    // segment + arrow
    // line.remove()
    // const point = svg.find('.point')
    // const first_point = point[getIDNum(pointID)]
    // let point_r = 0
    // if (point.length > 0) {
    //     point_r = first_point.bbox().width / 2
    // }
    // let annoCircleRadius = 0
    // let anno_dy = 200
    // let arrow_marker = svg.marker(5, 4, function (add) {
    //     add.path('M0,0 V4 L5,2 Z').fill('#ccc')
    // }).ref(4.5, 2)

    // const lastPoint = point[pointID + spec.column]
    // for (s of segmentPath(line, point_r, svg, arrow_marker)) {
    //     s.marker('end', arrow_marker)
    // }
}

function getIDNum(id) {
    let idSplit = id.split('-')
    return parseInt(idSplit[idSplit.length-1])
}

function findElement(svg, data, spec) {
    let childID = ''
    svg.each(function(i, children) {
        const child = children[i]
        if(Object.keys(child.attr()).includes('ac-data')){
            // eslint-disable-next-line
            const childData = JSON.parse(child.attr('ac-data').replace(/(&quot\;)/g,"\""))
            console.log(data[spec['x']]===childData[spec['x']], childData[spec['y']] === data[spec['y']], childData[spec['legend']] === data[spec['legend']])
            if(childData[spec['x']] === data[spec['x']] &&
            childData[spec['y']] === data[spec['y']] && childData[spec['legend']] === data[spec['legend']]){
                childID = child.attr('id')
                console.log(childID)
            }
        }
    })
    return childID
}

function annotateSVGUsingInsights(formatInsights, spec, svgStr) {
    const svgJs = SVG().svg(svgStr).children()[0]
    console.log(formatInsights)
    let hasShow = false
    for(let i = 0; i < formatInsights.length; i++) {
        const insight = formatInsights[i]
        if(['extreme', 'outlier', 'turning point', "proportion"].includes(insight['insightType'].toLowerCase())){
            // add circle
            // addCircleAnno(svgJs, insight['insightData'], spec, insight)
            // add arrow
            addArrowAnno(svgJs, insight['insightData'], spec, insight)
        }
        if(['trend'].includes(insight['insightType'].toLowerCase())){
            // add arrow
            addTrendArrowAnno(svgJs, insight['insightData'], spec, insight, hasShow)
        }
        if(insight['insightType'] === 'show') {
            hasShow = true
        }
    }
    const res = toSVGStr(svgJs)
    return res
}

function toSVGStr(svgJs) {
    return svgJs.width(svgJs.bbox().width).height(svgJs.bbox().height).svg()
}


export const SVGUtils = {
    addArrowAnno,
    addCircleLineAnno,
    annotateSVGUsingInsights
}
