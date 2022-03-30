function Stack() {
    let stack = [];

    this.push = function (value) {
        stack.push(value);
    };
    this.pop = function () {
        return stack.pop();
    };
    this.peek = function () {
        console.log(stack[stack.length - 1]);
    };
    this.print = function () {
        console.log(stack);
    };
}

let newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

newStack.peek();

newStack.push(5);
newStack.push(6);

newStack.peek();

newStack.pop();

newStack.print();
