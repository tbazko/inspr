/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import ItemsRandomizer from '../../src/services/ItemsRandomizer'

describe('services/ItemsRandomizer', function() {
  before(function() {
    let items = [1,2,3,4,5,6,7,8,9,10];
    let empty = [];
    this.itemsRandomizer = new ItemsRandomizer(items);
    this.emptyItemsRandomizer = new ItemsRandomizer(empty);
  });

  it('should return array of random items', function () {
    expect(this.itemsRandomizer.getRandom(2)).to.be.an('array');
    expect(this.itemsRandomizer.getRandom(2)).to.have.length(2);
    expect(this.itemsRandomizer.getRandom(2)).to.not.have.length(3);
  });

  it('should return array with all items', function() {
    expect(this.itemsRandomizer.all).to.be.an('array');
    expect(this.itemsRandomizer.all).to.have.length(10);
  });

  it('should return array with all remaining items', function() {
    expect(this.itemsRandomizer.remaining).to.be.an('array');
    expect(this.itemsRandomizer.remaining).to.have.length(4);
  });

  it('should substitute remaining items with all', function() {
    this.itemsRandomizer.reset();
    expect(this.itemsRandomizer.remaining).to.be.an('array');
    expect(this.itemsRandomizer.remaining).to.have.length(10);
  });

  it('should return array with undefined if was provided with empty array', function() {
    expect(this.emptyItemsRandomizer.getRandom(1)).to.be.an('array');
    expect(this.emptyItemsRandomizer.getRandom(1)[0]).to.be.an('undefined');
  });
})