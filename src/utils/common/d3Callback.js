import * as d3 from 'd3'

export function setClasses(sel, classList) {
  classList.forEach(c => {
    sel.classed(c, true)
  })
}

export function setClassesToAll(sel, classListGen) {
  sel.each(function(d, i) {
    const classList = classListGen(d, i)
    d3.select(this).call(setClasses, classList)
  })
}
