function Stack() {
    function StackNode(data) {
      this.value = data;
      this.prev = null;
    }
   
    this.current = null;
  
    this.isEmpty = () => this.current === null;

    this.peek = () => this.isEmpty() ? null : this.current?.value;
   
    this.push = (value) => {
      const node = new StackNode(value);
     
      if (this.isEmpty()) {
        this.current = node;
      }
      else {
        const current = this.current;
        node.prev = current;
        this.current = node;
      }
    }
  
    this.pop = () => {
      if (this.isEmpty()) {
        return null;
      }
     
      const current = this.current;
      this.current = this.current.prev;
     
      return current.value;
    }
  }

  module.exports = Stack;