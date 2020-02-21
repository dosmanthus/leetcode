/**
 * initialize your data structure here.
 */
// 104 ms
var MinStack = function() {
  this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let prev = this.getMin();
  let min = prev !== null ? Math.min(x, prev) : x;
  this.stack.push({ val: x, min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const stack = this.stack;
  return stack.length ? stack[stack.length - 1].val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  const stack = this.stack;
  return stack.length ? stack[stack.length - 1].min : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
let min = obj.getMin();   // Returns -3.
console.log(min);

obj.pop();
let top = obj.top();      // Returns 0.
console.log(top);

min = obj.getMin();   // Returns -2.
console.log(min);
