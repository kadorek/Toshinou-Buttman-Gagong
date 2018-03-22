/*
Created by Freshek on 07.10.2017
*/

class ResourseBoxInitHandler {
  static get ID() {
    return 15882;
  }

  constructor() {
    this._handler = function(e, a) {
      var box = JSON.parse(e.detail);

      if (box.hash.length == 5) {
        return;
      }

      if (a.isOnBlacklist(box.hash)) {
        return;
      }

      var pBox = new Box(box.x, box.y, box.hash, box[Variables.resourseboxType]);
      a.boxes[box.hash] = pBox;
    };
  }

  get handler() {
    return this._handler;
  }
}

