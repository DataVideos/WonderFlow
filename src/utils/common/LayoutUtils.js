function isPointInElement(x, y, element) {
  const {x: x1, y: y1, width, height} = element.getBoundingClientRect();
  const x2 = x1 + width;
  const y2 = y1 + height;
  return x1 <= x && x <= x2 && y1 <= y && y <= y2;
}

function getHoveredElements(x, y, elements) {
  return elements.filter(el => {
    return isPointInElement(x, y, el);
  });
}

function getMostPossibleElement(x, y, elements) {
  const hoveredElements = getHoveredElements(x, y, elements);

  if (hoveredElements.length > 1) {
    let minDist = Infinity;
    let closestEl = null;
    hoveredElements.forEach(el => {
      // get distance
      const {x, y, height, width} = el.getBoundingClientRect();
      const cx = x + width / 2, cy = y + height / 2;
      const dist = Math.pow(cx - x, 2) + Math.pow(cy - y, 2);

      if (minDist > dist) {
        minDist = dist;
        closestEl = el;
      }
    });
    return closestEl;

  } else if (hoveredElements.length === 1) {
    return hoveredElements[0];

  } else {
    return null;
  }
}

export const LayoutUtils = {
  isPointInElement,
  getHoveredElements,
  getMostPossibleElement,
}