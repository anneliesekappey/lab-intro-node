class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos]
  } else throw new Error('OutOfBounds');
}

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else if (this.length > 0) {
      let max = this.items[this.items.length - 1]
      return max
  }
}

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else if (this.length > 0) {
      let min = this.items[0]
      return min
    }
  }

  sum() {}

  avg() {}
}

// const sortedList1 = new SortedList(array, array.length());

module.exports = SortedList;
