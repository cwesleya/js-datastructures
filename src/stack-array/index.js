function StackArray(initialArray = []) {
    this.items = Array.isArray(initialArray) ? initialArray : [];
   
    this.isEmpty = () => this.items.length === 0;

    this.peek = () => this.isEmpty() ? null : this.items[this.items.length-1];
   
    this.push = (value) => this.items.push(value);
  
    this.pop = () => {
      if (this.isEmpty()) {
        return null;
      }
     
      return this.items.pop();
    }
  }

  module.exports = Stack;
