import {computeUUID} from "@/utils/common/uuid";

export class Scene {
  id
  spec

  chartId

  svgStr
  audioStr
  transcript
  targetModel

  sceneEl

  audioDuration

  constructor() {
    this.id = computeUUID();
    this.spec = {
      charts: [],
      templates: [],
      animation: null,
    };
  }
}