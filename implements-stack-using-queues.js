const mystack = function () {
  this.stack = [];
};

mystack.prototype.push = function (x) {
  this.stack.push(x);
};

mystack.prototype.pop = function () {
  return this.stack.pop();
};

mystack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

mystack.prototype.empty = function () {
  return this.stack.length === 0 ? true : false;
};

mystack.prototype.list = function () {
  return this.stack;
};

let ms = new mystack()
ms.push(1);
ms.push(2);
console.log(ms.top())
console.log(ms.pop())
console.log(ms.empty())
console.log(ms.list())