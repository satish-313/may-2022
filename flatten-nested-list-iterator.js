const nestedIterator = function (nestedList) {
  this.queue = [];

  let flatten = (list) => {
    for (let ele of list) {
      if (Number.isInteger(ele)) this.queue.push(ele);
      else flatten(ele);
    }
  };

  let flatten1 = (list) => {
    for (let item of list) {
      if (item.isInteger()) this.queue.push(item.getInteger());
      else flatten(item.getList());
    }
  };

  flatten(nestedList);

  flatten(nestedList);
};

nestedIterator.prototype.hasNext = function () {
  return this.queue.length !== 0;
};

nestedIterator.prototype.next = function () {
  return this.queue.shift();
};

const arr = new nestedIterator([[1, 1], 2, [1, 1]]);
console.log(arr);

// let a = [];

// function flatten(list) {
//   for (let ele of list) {
//     if (Number.isInteger(ele)) {
//       a.push(ele);
//     } else flatten(ele);
//   }
// }

// flatten([[1, 1], 2, [1, 1]]);
// console.log(a);
