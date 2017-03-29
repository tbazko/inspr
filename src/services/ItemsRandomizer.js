'use strict';

export default class ItemsRandomizer {
  constructor(items) {
    this.all = items;
    this.remaining = this.all.slice(this.all);
  }

  getRandom(count) {
    let items = [];
    for (var i = 0; i < count; i++) {
      var index = Math.floor(Math.random() * this.remaining.length);
      var toShow = this.remaining.splice(index, 1);
      items.push(toShow[0]);
    }
    return items;
  }

  reset() {
    this.remaining = this.all.slice(this.all);
  }
}